import './App.css';
import ContainerBackg from './components/containers/ContainerBackg';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Footer from './components/footer/Footer';
import ProductPage from './pages/ProductPage';
import ApieMus from './pages/ApieMus';
import Kontaktai from './pages/Kontaktai';
import PirkiniuKrepselis from './pages/PirkiniuKrepselis';
import CartContext from './context/CartContext';
import { useState } from 'react';
import UzsakymasPateiktas from './pages/UzsakymasPateiktas';
import AdminPage from './pages/AdminPage';
import ProductPageEdit from './pages/ProductPageEdit';

function App() {
  const [cartArray, setCartArray] = useState([]);
  const [numberInCart, setNumberInCart] = useState(0);
  const [totalSumCart, setTotalSumCart] = useState(0);
  const [inputs, setInputs] = useState({});
  const [editInputs, setEditInputs] = useState({});
  const [error, setError] = useState(false);
  const currentContextValue = {
    cartArray,
    inputs,
    editInputs,
    error,
    numberInCart,
    totalSumCart,
    editCartArray,
    editCartArrayRemove,
    setNumberInCartPlus,
    setNumberInCartMinus,
    setTotalSumCartFunc,
    setInputsFunc,
    setEditInputsFunc,
    setErrorFunc,
  };
  function editCartArray(arr) {
    setCartArray(cartArray.concat(arr));
  }
  function setErrorFunc(bool) {
    setError(bool);
  }
  function editCartArrayRemove(arr) {
    setCartArray(arr);
  }
  function setNumberInCartPlus(number = 1) {
    setNumberInCart(numberInCart + number);
  }
  function setTotalSumCartFunc(number) {
    setTotalSumCart(number);
  }
  function setNumberInCartMinus(number = 1) {
    if (numberInCart != 0) {
      setNumberInCart(numberInCart - number);
    }
  }
  function setInputsFunc(obj) {
    setInputs(obj);
  }
  function setEditInputsFunc(obj) {
    setEditInputs(obj);
  }
  return (
    <CartContext.Provider value={currentContextValue}>
      <div className='App'>
        <ContainerBackg>
          <Header />
          <Routes>
            <Route path='/' exact element={<HomePage />} />
            <Route path='/product/:id' element={<ProductPage />} />
            <Route path='/apiemus' element={<ApieMus />} />
            <Route path='/kontaktai' element={<Kontaktai />} />
            <Route path='/pirkti' element={<PirkiniuKrepselis />} />
            <Route path='/uzsakymas' element={<UzsakymasPateiktas />} />

            <Route path='/admin' element={<AdminPage />} />
            <Route path='/edit/:id' element={<ProductPageEdit />} />
            {/* <Route element={<ProtectedRoute path='/control' element={<ControlPage />} />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
         
        <Route path='*' element={<NotFound />} /> */}
          </Routes>
        </ContainerBackg>
        <Footer />
      </div>
    </CartContext.Provider>
  );
}

export default App;

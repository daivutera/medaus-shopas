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
import UzakymasPateiktas from './pages/UzakymasPateiktas';
import AdminPage from './pages/AdminPage';
import EditPage from './pages/EditPage';

function App() {
  const [cartArray, setCartArray] = useState([]);
  const [numberInCart, setNumberInCart] = useState(0);
  const [totalSumCart, setTotalSumCart] = useState(0);
  const currentContextValue = {
    cartArray,
    numberInCart,
    totalSumCart,
    editCartArray,
    editCartArrayRemove,
    setNumberInCartPlus,
    setNumberInCartMinus,
    setTotalSumCartFunc,
  };
  function editCartArray(arr) {
    setCartArray(cartArray.concat(arr));
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
            <Route path='/uzsakymas' element={<UzakymasPateiktas />} />

            <Route path='/admin' element={<AdminPage />} />
            <Route path='/edit' element={<EditPage />} />
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

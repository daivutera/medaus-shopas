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
import AdminPage from './pages/AdminPage';
import ProductPageEdit from './pages/ProductPageEdit';
import AddPage from './pages/AddPage';
import Uzsakymai from './pages/Uzsakymai';
import LoginPage from './pages/LoginPage';
import AuthContext from './context/AuthContext';
import ProtectedRoute from './components/PrivateRoute';
import NotFound from './pages/NotFound';

function App() {
  const [cartArray, setCartArray] = useState([]);
  const [numberInCart, setNumberInCart] = useState(0);
  const [totalSumCart, setTotalSumCart] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
  function logout() {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  }
  async function login() {
    setIsLoggedIn(true);
  }
  const currentAuthContextValue = { isLoggedIn, logout, login };
  return (
    <CartContext.Provider value={currentContextValue}>
      <AuthContext.Provider value={currentAuthContextValue}>
        <div className='App'>
          <ContainerBackg>
            <Header />
            <Routes>
              <Route path='/' exact element={<HomePage />} />
              <Route path='/product/:id' element={<ProductPage />} />
              <Route path='/apiemus' element={<ApieMus />} />
              <Route path='/kontaktai' element={<Kontaktai />} />
              <Route path='/pirkti' element={<PirkiniuKrepselis />} />
              <Route path='/login' element={<LoginPage />} />
              {/* <Route path='/admin' element={<AdminPage />} /> */}

              <Route
                path='/admin'
                element={
                  <ProtectedRoute>
                    <AdminPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path='/edit/:id'
                element={
                  <ProtectedRoute>
                    <ProductPageEdit />
                  </ProtectedRoute>
                }
              />
              <Route
                path='/add'
                element={
                  <ProtectedRoute>
                    <AddPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path='/uzsakymai'
                element={
                  <ProtectedRoute>
                    <Uzsakymai />
                  </ProtectedRoute>
                }
              />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </ContainerBackg>
          <Footer />
        </div>
      </AuthContext.Provider>
    </CartContext.Provider>
  );
}

export default App;

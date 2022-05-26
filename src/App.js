import './App.css';
import ContainerBackg from './components/containers/ContainerBackg';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Footer from './components/footer/Footer';
import ProductPage from './pages/ProductPage';
import ApieMus from './pages/ApieMus';
import Kontaktai from './pages/Kontaktai';

function App() {
  return (
    <div className='App'>
      <ContainerBackg>
        <Header />
        <Routes>
          <Route path='/' exact element={<HomePage />} />
          <Route path='/product/:id' element={<ProductPage />} />
          <Route path='/apiemus' element={<ApieMus />} />
          <Route path='/kontaktai' element={<Kontaktai />} />
          {/* <Route element={<ProtectedRoute path='/control' element={<ControlPage />} />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} /> */}
        </Routes>
      </ContainerBackg>
      <Footer />
    </div>
  );
}

export default App;

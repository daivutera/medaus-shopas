import './App.css';
import Container from './components/container/Container';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Container>
        <Header />
      </Container>
      <Routes>
        <Route path='/' exact element={<HomePage />} />
        {/* <Route element={<ProtectedRoute path='/control' element={<ControlPage />} />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;

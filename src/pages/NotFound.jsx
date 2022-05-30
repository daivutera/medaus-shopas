import React from 'react';
import { Link } from 'react-router-dom';
import ContainerForPageContent from '../components/containers/ContainerForPageContent';
import AuthContext from '../context/AuthContext';

function NotFound() {
  return (
    <>
      <ContainerForPageContent>
        <h2>Tokios puslapio nėra</h2>
        <p>Pasitikrinkite ar tikrai toks URL adresas</p>
        <Link to='/'>Grįžti į pagrindinį</Link>
      </ContainerForPageContent>
    </>
  );
}
export default NotFound;

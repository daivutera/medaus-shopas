import React from 'react';
import Container from '../components/containers/Container';
import ContainerForPageContent from './../components/containers/ContainerForPageContent';

const Kontaktai = () => {
  return (
    <ContainerForPageContent type='white'>
      <Container>
        <img
          style={{ width: '25rem' }}
          src='https://nuotraukosprojektams.fra1.digitaloceanspaces.com/meggyn-pomerleau-crW7EdLP0M0-unsplash.jpg'
          alt=''
        />
        <div style={{ textAlign: 'left' }}>
          <h2>Mūsų kontaktai </h2>
          <p>UAB „Medutis“ Vilnius, Lietuva </p>
          <p>Įmonės kodas:300092562 </p>
          <p>PVM mokėtojo kodas: - </p>
          <p>Bankas: Swedbank </p>
          <p> Banko kodas:73000 </p>
          <p>Atsiskaitomoji sąskaita: LT98 7300 0101 1091 xxxx </p>
          <p>Telefonas: 8 606999999 </p>
          <p> Elektroninis paštas: info@medutis.lt</p>
        </div>
      </Container>
    </ContainerForPageContent>
  );
};

export default Kontaktai;

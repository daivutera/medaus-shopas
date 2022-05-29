import React from 'react';
import { Button } from '../components/button/Button.style';
import ContainerForPageContent from '../components/containers/ContainerForPageContent';
import * as S from './UzsakymasPateiktas.style';
import { useNavigate } from 'react-router-dom';

const UzsakymasPateiktas = () => {
  const Navigate = useNavigate();
  return (
    <ContainerForPageContent>
      <S.DivText>
        <S.Img
          src='https://nuotraukosprojektams.fra1.digitaloceanspaces.com/medus.jpg'
          alt=''
        />
        <p>
          Jūsų užsakymas pateiktas ir šiuo metu apdorojamas. Užsakymo
          patvirtinimas bus išsiųstas nurodytu el.paštu.
        </p>

        <Button
          onClick={() => {
            Navigate('/');
          }}>
          Grįžti į pagrindinį puslapį
        </Button>
      </S.DivText>
    </ContainerForPageContent>
  );
};

export default UzsakymasPateiktas;

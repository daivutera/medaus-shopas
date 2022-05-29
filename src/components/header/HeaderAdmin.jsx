import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../button/Button';
import * as S from './HeaderAdmin.style';

const HeaderAdmin = () => {
  const Navigate = useNavigate();

  return (
    <S.Flex>
      <div>
        <Button
          onClick={() => {
            Navigate('/admin');
          }}>
          Valdymo panelė
        </Button>
        <Button
          onClick={() => {
            Navigate('/add');
          }}>
          Pridėti prekę
        </Button>
        <Button
          onClick={() => {
            Navigate('/uzsakymai');
          }}>
          Užsakymai
        </Button>
        <Button
          onClick={() => {
            Navigate('/login');
          }}>
          Atsijungti
        </Button>
      </div>
    </S.Flex>
  );
};

export default HeaderAdmin;

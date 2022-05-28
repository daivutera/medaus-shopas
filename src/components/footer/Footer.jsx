import React from 'react';
import * as S from './Footer.style';
import Button from '../button/Button';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const Navigate = useNavigate();
  return (
    <S.Footer>
      Copyright Ⓒ Visos teisės saugomos. {new Date().getFullYear()}{' '}
      <S.Span
        onClick={() => {
          Navigate('/admin');
        }}>
        Prisijungti
      </S.Span>
    </S.Footer>
  );
};

export default Footer;

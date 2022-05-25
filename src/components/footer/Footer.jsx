import React from 'react';
import * as S from './Footer.style';

const Footer = () => {
  return (
    <S.Footer>
      Copyright Ⓒ Visos teisės saugomos. {new Date().getFullYear()} Prisijungti
    </S.Footer>
  );
};

export default Footer;

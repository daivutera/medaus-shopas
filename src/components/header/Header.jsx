import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import Button from '../button/Button';
import * as S from './Header.style';

const Header = () => {
  const cartContext = useContext(CartContext);

  const Navigate = useNavigate();

  return (
    <S.Flex>
      <S.Img src='medutis.png' alt='' />
      <div>
        <Button
          onClick={() => {
            Navigate('/');
          }}>
          Medaus e-shop
        </Button>
        <Button
          onClick={() => {
            Navigate('/apiemus');
          }}>
          Apie mus
        </Button>
        <Button
          onClick={() => {
            Navigate('/kontaktai');
          }}>
          Kontaktai
        </Button>
      </div>
      <S.NumberCart>
        <S.Span>+37060400123</S.Span>

        <Button
          onClick={() => {
            Navigate('/pirkti');
          }}>
          <S.DivCart>
            <FontAwesomeIcon
              style={{
                color: 'white',
                fontSize: '30px',
                padding: '0 1.8rem 0 0',
              }}
              icon={faShoppingCart}
            />
            <S.Cart
              onClick={() => {
                Navigate('/pirkti');
              }}>
              {cartContext.numberInCart}
            </S.Cart>
            Pirkinių krepšelis
          </S.DivCart>
        </Button>
      </S.NumberCart>
    </S.Flex>
  );
};

Header.propTypes = {};

export default Header;

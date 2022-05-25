import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import Button from '../button/Button';
import * as S from './Header.style';

const Header = () => {
  return (
    <S.Flex>
      <S.Img src='medutis.png' alt='' />
      <div>
        <Button>Medaus e-shop</Button>
        <Button>Apie mus</Button>
        <Button>Kontaktai</Button>
      </div>
      <S.NumberCart>
        <S.Span>+37060400123</S.Span>

        <Button>
          <FontAwesomeIcon
            style={{
              color: 'white',
              fontSize: '30px',
              padding: '0 1.8rem 0 0',
            }}
            icon={faShoppingCart}
          />
          <S.Cart>0</S.Cart>
          Pirkinių krepšelis
        </Button>
      </S.NumberCart>
    </S.Flex>
  );
};

Header.propTypes = {};

export default Header;

import React from 'react';
import PropTypes from 'prop-types';
import Button from './../button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import * as S from './ProductItem.style';
import { useNavigate } from 'react-router-dom';

const ProductItem = ({ img, name, quantity, price, id }) => {
  const Navigate = useNavigate();
  function onClick(e) {
    e.stopPropagation();
    console.log('paspaude mygtuka');
  }
  function oneItemPage(id) {
    console.log('id', id);
    Navigate(`/product/${id}`);
  }

  return (
    <S.Div onClick={() => oneItemPage(id)}>
      <img src={img} alt={name} />
      <div>
        <S.H3>
          {name} {quantity} kg{' '}
        </S.H3>
        <S.H3>
          <S.Span>{price} €</S.Span>
          <Button onClick={onClick}>
            <FontAwesomeIcon
              style={{
                color: 'white',
                fontSize: '20px',
                padding: '0 0 0 0',
              }}
              icon={faShoppingCart}
            />
          </Button>
        </S.H3>
      </div>
    </S.Div>
  );
};

ProductItem.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default ProductItem;

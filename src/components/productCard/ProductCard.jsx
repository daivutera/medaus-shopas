import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './../button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import * as S from './ProductCard.style';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ img, name, quantity, price, id }) => {
  const [wantedAmount, setWantedAmount] = useState(0);
  //   const Navigate = useNavigate();
  //   function onClick(e) {
  //     e.stopPropagation();
  //     console.log('paspaude mygtuka');
  //   }
  //   function oneItemPage(id) {
  //     console.log('id', id);
  //     Navigate(`/product/${id}`);
  //   }

  return (
    <S.Div>
      <S.Img src={img} alt={name} />
      <div>
        <h3>
          {name} {quantity} kg
        </h3>
        <h3>
          {price} € <Button>+</Button>
          <Button>{wantedAmount}</Button>
          <Button>-</Button>
        </h3>
      </div>
    </S.Div>
  );
};

ProductCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default ProductCard;

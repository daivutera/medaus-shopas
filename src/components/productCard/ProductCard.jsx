import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './../button/Button';
import * as S from './ProductCard.style';

const ProductCard = ({ img, name, quantity, price, description }) => {
  const [wantedAmount, setWantedAmount] = useState(0);

  return (
    <S.Div>
      <S.ImgDiv>
        <S.Img src={img} alt={name} />
      </S.ImgDiv>
      <S.ProductInfo>
        <h3>
          {name} {quantity} kg
        </h3>
        <h3>{price} € </h3>
        <p>{description}</p>
        <div>
          <Button>-</Button>
          <Button color='secondary'>{wantedAmount}</Button>
          <Button>+</Button>
        </div>
        <div>
          <Button>Atgal</Button>
          <Button>Pirkti</Button>
        </div>
      </S.ProductInfo>
    </S.Div>
  );
};

ProductCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCard;

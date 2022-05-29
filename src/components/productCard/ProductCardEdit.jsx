import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button';
import * as S from './ProductCardEdit.style';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ img, name, quantity_kg, price, description, id }) => {
  const Navigate = useNavigate();

  return (
    <S.Div>
      <S.ImgDiv>
        <S.Img src={img} alt={name} />
      </S.ImgDiv>
      <S.ProductInfo>
        <div>
          <p>
            {name} {quantity_kg} kg
          </p>
          <p>{price} € </p>
          <p>{description}</p>
        </div>

        <Button
          onClick={() => {
            Navigate('/admin');
          }}
          color='secondary'>
          Atgal
        </Button>
      </S.ProductInfo>
    </S.Div>
  );
};

ProductCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  quantity_kg: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCard;

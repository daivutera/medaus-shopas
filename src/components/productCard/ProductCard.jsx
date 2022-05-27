import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './../button/Button';
import * as S from './ProductCard.style';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ img, name, quantity_kg, price, description, id }) => {
  const Navigate = useNavigate();
  const cartInfo = useContext(CartContext);
  const [temporaryCart, setTemporaryCart] = useState(0);
  function setNumberInTemporaryCartPlus() {
    setTemporaryCart(temporaryCart + 1);
    console.log('plius');
  }
  function setNumberInTemporaryCartMinus() {
    if (temporaryCart != 0) {
      setTemporaryCart(temporaryCart - 1);
      console.log('minus');
    }
  }
  const cartArrAfterAddToCartClick = [
    {
      product_id: id,
      product_quantity: temporaryCart,
      product_quantity_kg: quantity_kg,
      product_price: price,
      product_name: name,
    },
  ];
  return (
    <S.Div>
      <S.ImgDiv>
        <S.Img src={img} alt={name} />
      </S.ImgDiv>
      <S.ProductInfo>
        <h3>
          {name} {quantity_kg} kg
        </h3>
        <h3>{price} € </h3>
        <p>{description}</p>
        <div>
          <div>
            <Button onClick={() => setNumberInTemporaryCartMinus()}>-</Button>
            <Button color='secondary'>{temporaryCart}</Button>
            <Button onClick={() => setNumberInTemporaryCartPlus(temporaryCart)}>
              +
            </Button>
            <Button
              onClick={() => {
                cartInfo.setNumberInCartPlus(temporaryCart);
                if (temporaryCart > 0) {
                  cartInfo.editCartArray(cartArrAfterAddToCartClick);
                  console.log('cartarr', cartInfo.cartArray);
                  setTemporaryCart(0);
                }
              }}>
              <FontAwesomeIcon
                style={{
                  color: 'white',
                  fontSize: '20px',
                  padding: '0 0rem 0 0',
                }}
                icon={faShoppingCart}
              />
            </Button>
          </div>
          <S.ButtonBottomDiv>
            <Button color='secondary'>Atgal</Button>
            <Button
              onClick={() => {
                Navigate('/pirkti');
              }}>
              Pirkti
            </Button>
          </S.ButtonBottomDiv>
        </div>
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

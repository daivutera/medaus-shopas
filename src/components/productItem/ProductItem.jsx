import React from 'react';
import PropTypes from 'prop-types';
import Button from './../button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import * as S from './ProductItem.style';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from './../../context/CartContext';
import { BackgroundDiv } from './../containers/ContainerBackg.style';

const ProductItem = ({ img, name, quantity, price, id, unique_id }) => {
  const Navigate = useNavigate();
  const cartContext = useContext(CartContext);
  const cartArrFromContext = cartContext.cartArray;

  function onClick(e) {
    e.stopPropagation();
    console.log('paspaude mygtuka');
    const oneItemToAddToContextArr = [
      {
        id: unique_id,
        product_id: id,
        product_name: name,
        product_price: price,
        product_quantity: 1,
        product_quantity_kg: quantity,
      },
    ];
    cartContext.editCartArray(oneItemToAddToContextArr);
    cartContext.setNumberInCartPlus();
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
  unique_id: PropTypes.node.isRequired,
};

export default ProductItem;

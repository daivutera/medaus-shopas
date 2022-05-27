import React from 'react';
import PropTypes from 'prop-types';
import * as S from './TableRow.style';
import Button from '../button/Button';
import { useContext } from 'react';
import CartContext from './../../context/CartContext';

const TableRow = ({
  product_id,
  product_name,
  product_quantity,
  product_quantity_kg,
  product_price,
}) => {
  const cartContext = useContext(CartContext);
  const cartArr = cartContext.cartArray;
  const dateObj = new Date();
  const timeStamp = `${dateObj.getFullYear()}-${
    dateObj.getUTCMonth() + 1
  }-${dateObj.getUTCDate()} ${dateObj.getHours()}:${dateObj.getMinutes()}`;
  return (
    <tr>
      <S.Td>{product_id}</S.Td>
      <S.Td>{product_name}</S.Td>
      <S.Td>{product_quantity_kg}</S.Td>
      <S.Td>{product_quantity}</S.Td>
      <S.Td>{product_price}</S.Td>
      <S.Td>{cartArr.length ? timeStamp : ''}</S.Td>
      <S.Td>{cartArr.length ? <Button>X</Button> : ''}</S.Td>
    </tr>
  );
};

TableRow.propTypes = {
  product_id: PropTypes.number.isRequired,
  product_name: PropTypes.string.isRequired,
  product_quantity: PropTypes.number.isRequired,
  product_quantity_kg: PropTypes.number.isRequired,
  product_price: PropTypes.number.isRequired,
};

export default TableRow;

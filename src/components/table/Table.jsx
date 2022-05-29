import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Table.style';
import TableRow from './TableRow';
import { v4 as uuid } from 'uuid';
import CartContext from './../../context/CartContext';
import { useContext } from 'react';

const Table = ({ arr }) => {
  function getnerateDataFromArr() {
    return (
      <tbody>
        {!arr.length && (
          <TableRow
            product_id={''}
            product_name={'Prekių krepšelyje nėra'}
            product_quantity_kg={''}
            product_quantity={''}
            order_time={''}
            product_price={''}
          />
        )}
        {arr.map((oneItem) => (
          <TableRow
            key={uuid()}
            id={oneItem.id}
            product_id={oneItem.product_id}
            product_name={oneItem.product_name}
            product_quantity={oneItem.product_quantity}
            product_quantity_kg={oneItem.product_quantity_kg}
            product_price={oneItem.product_price}
          />
        ))}
      </tbody>
    );
  }

  console.log('arr', arr);
  const totalCartAmount = arr.reduce(
    (prevVal, currVal) =>
      prevVal + currVal.product_price * currVal.product_quantity,
    0
  );
  const cartContext = useContext(CartContext);
  cartContext.setTotalSumCartFunc(totalCartAmount);
  console.log('totalCartAmount', totalCartAmount);
  return (
    <S.Table>
      <thead>
        <tr>
          <S.Th>Prekės id</S.Th>
          <S.Th>Pavadinimas</S.Th>
          <S.Th>Pakuotės dydis, kg</S.Th>
          <S.Th>Užsakomas kiekis, vnt</S.Th>
          <S.Th>Kaina už vnt, EUR (su PVM)</S.Th>
          <S.Th>Užsakymo laikas</S.Th>
          <S.Th>Trinti</S.Th>
        </tr>
      </thead>
      {getnerateDataFromArr()}
      <tfoot>
        <tr>
          <S.Td></S.Td>
          <S.Td></S.Td>
          <S.Td></S.Td>
          <S.Td></S.Td>
          <S.Td></S.Td>
          <S.Tf>Bendra suma</S.Tf>
          <S.TfTotal>€{totalCartAmount}</S.TfTotal>
        </tr>
      </tfoot>
    </S.Table>
  );
};

Table.propTypes = {
  arr: PropTypes.array.isRequired,
};

export default Table;

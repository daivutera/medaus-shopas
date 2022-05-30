import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Table.style';
import TableRow from './TableRow';
import { v4 as uuid } from 'uuid';
import CartContext from '../../context/CartContext';
import { useContext } from 'react';

const Table = ({ arr }) => {
  function getnerateDataFromArr() {
    return (
      <tbody>
        {!arr.length && (
          <TableRow
            id={''}
            juridinis={''}
            amount={'Užsakymų nėra'}
            amount_total_EUR={''}
            order_date={''}
            product_id={''}
            product_name={''}
            send_to={''}
            email={''}
          />
        )}
        {arr.map((oneItem) => (
          <TableRow
            key={uuid()}
            id={oneItem.id}
            juridinis={oneItem.juridinis}
            amount={oneItem.amount}
            amount_total_EUR={oneItem.amount_total_EUR}
            order_date={oneItem.order_date}
            product_id={oneItem.product_id}
            product_name={oneItem.product_name}
            send_to={oneItem.send_to}
            email={oneItem.email}
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

import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Table.style';
import TableRow from './TableRow';

const Table = ({ arr }) => {
  console.log('arr', arr);
  return (
    <S.Table>
      <tr>
        <S.Th>Prekės id</S.Th>
        <S.Th>Pavadinimas</S.Th>
        <S.Th>Pakuotės dydis, kg</S.Th>
        <S.Th>Užsakomas kiekis, vnt</S.Th>
        <S.Th>Kaina už vnt, EUR</S.Th>
        <S.Th>Užsakymo laikas</S.Th>
        <S.Th>Trinti</S.Th>
      </tr>
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
          key={oneItem.product_id}
          product_id={oneItem.product_id}
          product_name={oneItem.product_name}
          product_quantity={oneItem.product_quantity}
          product_quantity_kg={oneItem.product_quantity_kg}
          product_price={oneItem.product_price}
        />
      ))}
    </S.Table>
  );
};

Table.propTypes = {
  arr: PropTypes.array.isRequired,
};

export default Table;

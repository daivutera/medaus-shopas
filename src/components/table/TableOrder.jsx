import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Table.style';
import TableRowOrder from './TableRowOrder';
import { v4 as uuid } from 'uuid';

const TableOrder = ({ arr }) => {
  function getnerateDataFromArr() {
    return (
      <tbody>
        {!arr.length && (
          <TableRowOrder
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
          <TableRowOrder
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

  return (
    <S.Table>
      <thead>
        <tr>
          <S.Th>Užsakymo id</S.Th>
          <S.Th>Ar juridinis asmuo</S.Th>
          <S.Th>Prekės kaina</S.Th>
          <S.Th>Užsakymo suma, EUR</S.Th>
          <S.Th>Užsakymo laikas</S.Th>
          <S.Th>Prekės id</S.Th>
          <S.Th>Prekės pavadinimas</S.Th>
          <S.Th>Kur Siųsti</S.Th>
          <S.Th>El. paštas</S.Th>
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
          <S.Td></S.Td>
          <S.Td></S.Td>
          <S.Td></S.Td>
          <S.Td></S.Td>
          <S.Td></S.Td>
        </tr>
      </tfoot>
    </S.Table>
  );
};

TableOrder.propTypes = {
  arr: PropTypes.array.isRequired,
};

export default TableOrder;

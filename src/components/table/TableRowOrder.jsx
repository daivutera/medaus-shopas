import React from 'react';
import PropTypes from 'prop-types';
import * as S from './TableRow.style';

const TableRowOrder = ({
  id,
  juridinis,
  amount,
  amount_total_EUR,
  order_date,
  product_id,
  product_name,
  send_to,
  email,
}) => {
  return (
    <tr>
      <S.Td>{id}</S.Td>
      <S.Td>{juridinis}</S.Td>
      <S.Td>{amount}</S.Td>
      <S.Td>{amount_total_EUR}</S.Td>
      <S.Td>{order_date}</S.Td>
      <S.Td>{product_id}</S.Td>
      <S.Td>{product_name}</S.Td>
      <S.Td>{send_to}</S.Td>
      <S.Td>{email}</S.Td>
    </tr>
  );
};

TableRowOrder.propTypes = {
  id: PropTypes.node.isRequired,
  juridinis: PropTypes.bool.isRequired,
  amount: PropTypes.number.isRequired,
  amount_total_EUR: PropTypes.number.isRequired,
  order_date: PropTypes.number.isRequired,
  product_id: PropTypes.number.isRequired,
  product_name: PropTypes.string.isRequired,
  send_to: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default TableRowOrder;

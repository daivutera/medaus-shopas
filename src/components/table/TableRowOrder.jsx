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
      <S.Tdnarrow>{id}</S.Tdnarrow>
      <S.Tdnarrow>{juridinis}</S.Tdnarrow>
      <S.Tdnarrow>{amount}</S.Tdnarrow>
      <S.Tdnarrow>{amount_total_EUR}</S.Tdnarrow>
      <S.Tdnarrow>{order_date}</S.Tdnarrow>
      <S.Tdnarrow>{product_id}</S.Tdnarrow>
      <S.Tdnarrow>{product_name}</S.Tdnarrow>
      <S.Tdnarrow>{send_to}</S.Tdnarrow>
      <S.Tdnarrow>{email}</S.Tdnarrow>
    </tr>
  );
};

TableRowOrder.propTypes = {
  id: PropTypes.number.isRequired,
  juridinis: PropTypes.bool.isRequired,
  amount: PropTypes.number.isRequired,
  amount_total_EUR: PropTypes.number.isRequired,
  order_date: PropTypes.string.isRequired,
  product_id: PropTypes.number.isRequired,
  product_name: PropTypes.string.isRequired,
  send_to: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default TableRowOrder;

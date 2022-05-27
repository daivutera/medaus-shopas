import React from 'react';
import { PropTypes } from 'prop-types';
import * as S from './CheckBox.style';

const CheckBox = ({ id, name, text }) => {
  return (
    <S.Div>
      <S.InputCheckBox type='checkbox' id={id} name={name} />
      <S.Label for={id}>{text}</S.Label>
    </S.Div>
  );
};
CheckBox.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.node.isRequired,
};
export default CheckBox;

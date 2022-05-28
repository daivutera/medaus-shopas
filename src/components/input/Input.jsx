import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Input.style';

const Input = ({ type, name, id, placeholder, label }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <S.Input type={type} name={name} id={id} placeholder={placeholder} />
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'number', 'email']),
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
};

export default Input;

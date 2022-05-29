import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './Input.style';

const Input = ({ type, name, id, placeholder, label, handleChange }) => {
  const [value, setValue] = useState('');
  function onChange(e) {
    setValue(e.target.value);
    handleChange(e.target.value);
  }
  return (
    <div>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.Input
        onChange={onChange}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        required
      />
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'number', 'email']),
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
};

export default Input;

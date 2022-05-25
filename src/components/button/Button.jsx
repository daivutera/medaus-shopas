import React, { Children } from 'react';
import PropTypes from 'prop-types';
import * as S from './Button.style';

const Button = ({ children, onClick }) => {
  return <S.Button onClick={onClick}>{children}</S.Button>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default Button;

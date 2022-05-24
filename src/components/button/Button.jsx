import React, { Children } from 'react';
import PropTypes from 'prop-types';
import * as S from './Button.style';

const Button = ({ children }) => {
  return <S.Button>{children}</S.Button>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;

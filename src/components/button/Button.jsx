import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Button.style';

const Button = ({ children, onClick, color }) => {
  return (
    <S.Button color={color} onClick={onClick}>
      {children}
    </S.Button>
  );
};

Button.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary']),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};
Button.defaultProps = {
  color: 'primary',
};
export default Button;

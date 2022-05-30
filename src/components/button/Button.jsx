import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Button.style';

const Button = ({ children, onClick, color, type, disabled }) => {
  return (
    <S.Button color={color} onClick={onClick} disabled={disabled} type={type}>
      {children}
    </S.Button>
  );
};

Button.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary']),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['submit', 'button']),
  disabled: PropTypes.oneOf([true, false]),
};
Button.defaultProps = {
  color: 'primary',
  type: 'button',
};
export default Button;

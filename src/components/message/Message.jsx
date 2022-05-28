import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Message.style';

const Message = ({ children, color, height }) => {
  return (
    <S.Div color={color} height={height}>
      {children}
    </S.Div>
  );
};

Message.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['red', 'green']),
  height: PropTypes.oneOf(['max', 'min']),
};
Message.defaultProps = {
  color: 'green',
  height: 'min',
};

export default Message;

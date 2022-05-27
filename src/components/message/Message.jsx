import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Message.style';

const Message = ({ children }) => {
  return <S.Div>{children}</S.Div>;
};

Message.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Message;

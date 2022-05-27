import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Container.style';

const Container = ({ children }) => {
  return <S.Flex> {children}</S.Flex>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;

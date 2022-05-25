import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Container.style';

const Container = ({ children }) => {
  return <S.Grid> {children}</S.Grid>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;

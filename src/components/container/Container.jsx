import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Container.style';

const Container = ({ children }) => {
  return <S.BackgroundDiv> {children}</S.BackgroundDiv>;
};

Container.propTypes = {};

export default Container;

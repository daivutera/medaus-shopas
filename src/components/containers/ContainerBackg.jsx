import React from 'react';
import PropTypes from 'prop-types';
import * as S from './ContainerBackg.style';

const Container = ({ children }) => {
  return <S.BackgroundDiv> {children}</S.BackgroundDiv>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;

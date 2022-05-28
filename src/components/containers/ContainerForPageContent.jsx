import React from 'react';
import PropTypes from 'prop-types';
import * as S from './ContainerForPageContent.style';

const ContainerForPageContent = ({ children, type }) => {
  return <S.Div type={type}>{children}</S.Div>;
};

ContainerForPageContent.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['white', 'none']),
};

export default ContainerForPageContent;

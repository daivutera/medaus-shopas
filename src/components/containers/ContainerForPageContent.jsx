import React from 'react';
import PropTypes from 'prop-types';
import * as S from './ContainerForPageContent.style';

const ContainerForPageContent = ({ children }) => {
  return <S.Div>{children}</S.Div>;
};

ContainerForPageContent.propTypes = { children: PropTypes.node.isRequired };

export default ContainerForPageContent;

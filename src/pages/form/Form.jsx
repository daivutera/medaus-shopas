import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Form.style.jsx';

const Form = ({ children, onSubmit, formName }) => {
  return (
    <S.Form onSubmit={onSubmit}>
      <S.H3>{formName}</S.H3>
      {children}
    </S.Form>
  );
};

Form.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
  formName: PropTypes.string,
};

export default Form;

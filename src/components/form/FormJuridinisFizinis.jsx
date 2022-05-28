import React from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import Button from '../button/Button';
import Input from '../input/Input';
import CheckBox from '../checkBox/CheckBox';

const FormJuridinisFizinis = ({ onSubmit, onClick, type }) => {
  return (
    <Form
      formName={
        type === 'juridinis'
          ? 'Juridinio asmens duomenys'
          : 'Fizinio asmens duomenys'
      }
      onSubmit={onSubmit}>
      {type === 'fizinis' && (
        <Input type='text' name='name' id='name' placeholder='Vardas' />
      )}
      {type === 'fizinis' && (
        <Input type='text' name='pavardė' id='pavardė' placeholder='Pavardė' />
      )}
      {type === 'juridinis' && (
        <Input
          type='text'
          name='pavadinimas'
          id='pavadinimas'
          placeholder='Įmonės pavadinimas'
        />
      )}
      {type === 'juridinis' && (
        <Input
          type='number'
          name='kodas'
          id='kodas'
          placeholder='Imonės kodas'
        />
      )}
      {type === 'juridinis' && (
        <Input
          type='number'
          name='pvmKodas'
          id='pvmKodas'
          placeholder='PVM mokėtojo kodas'
        />
      )}
      <Input
        type='text'
        name='adresas'
        id='adresas'
        placeholder='Pristatymo adresas'
      />
      <Input type='text' name='miestas' id='miestas' placeholder='Miestas' />
      <Input
        type='email'
        name='email'
        id='email'
        placeholder='Elektroninis paštas'
      />
      <Input type='number' name='tel' id='tel' placeholder='Tel' />
      <Button color='secondary'>
        <CheckBox
          id='faktura'
          name='faktura'
          text='Reikės sąskaitos-faktūros'
        />
      </Button>
      <Button type='submit' onClick={onClick}>
        Apmokėti
      </Button>
    </Form>
  );
};

FormJuridinisFizinis.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['fizinis', 'juridinis']).isRequired,
};

export default FormJuridinisFizinis;

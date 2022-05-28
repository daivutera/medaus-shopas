import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import Button from '../button/Button';
import Input from '../input/Input';
import CheckBox from '../checkBox/CheckBox';
import CartContext from './../../context/CartContext';

const FormJuridinisFizinis = ({ onSubmit, type }) => {
  const context = useContext(CartContext);
  const [userDetails, setUserDetails] = useState({
    email: '',
    tel: '',
    adresas: '',
    name: '',
    pavarde: '',
    miestas: '',
    kodas: '',
    pvmKodas: '',
    pavadinimas: '',
  });
  function saveInputsToContext() {
    context.setInputsFunc(userDetails);
    console.log('userDetails', userDetails);
  }

  return (
    <Form
      formName={
        type === 'juridinis'
          ? 'Juridinio asmens duomenys'
          : 'Fizinio asmens duomenys'
      }
      onSubmit={(e) => {
        e.preventDefault();
        saveInputsToContext();
        onSubmit();
      }}>
      {type === 'fizinis' && (
        <Input
          type='text'
          name='name'
          id='name'
          placeholder='Vardas'
          handleChange={(name) => setUserDetails({ ...userDetails, name })}
        />
      )}
      {type === 'fizinis' && (
        <Input
          type='text'
          name='pavardė'
          id='pavardė'
          placeholder='Pavardė'
          handleChange={(pavarde) =>
            setUserDetails({ ...userDetails, pavarde })
          }
        />
      )}
      {type === 'juridinis' && (
        <Input
          type='text'
          name='pavadinimas'
          id='pavadinimas'
          placeholder='Įmonės pavadinimas'
          handleChange={(pavadinimas) =>
            setUserDetails({ ...userDetails, pavadinimas })
          }
        />
      )}
      {type === 'juridinis' && (
        <Input
          type='number'
          name='kodas'
          id='kodas'
          placeholder='Imonės kodas'
          handleChange={(kodas) => setUserDetails({ ...userDetails, kodas })}
        />
      )}
      {type === 'juridinis' && (
        <Input
          type='number'
          name='pvmKodas'
          id='pvmKodas'
          placeholder='PVM mokėtojo kodas'
          handleChange={(pvmKodas) =>
            setUserDetails({ ...userDetails, pvmKodas })
          }
        />
      )}
      <Input
        type='text'
        name='adresas'
        id='adresas'
        placeholder='Pristatymo adresas'
        handleChange={(adresas) => setUserDetails({ ...userDetails, adresas })}
      />
      <Input
        type='text'
        name='miestas'
        id='miestas'
        placeholder='Miestas'
        handleChange={(miestas) => setUserDetails({ ...userDetails, miestas })}
      />
      <Input
        type='email'
        name='email'
        id='email'
        placeholder='Elektroninis paštas'
        handleChange={(email) => setUserDetails({ ...userDetails, email })}
      />
      <Input
        type='number'
        name='tel'
        id='tel'
        placeholder='Tel'
        handleChange={(tel) => setUserDetails({ ...userDetails, tel })}
      />
      <Button color='secondary'>
        <CheckBox
          id='faktura'
          name='faktura'
          text='Reikės sąskaitos-faktūros'
        />
      </Button>
      <Button type='submit'>Apmokėti</Button>
    </Form>
  );
};

FormJuridinisFizinis.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['fizinis', 'juridinis']).isRequired,
};

export default FormJuridinisFizinis;

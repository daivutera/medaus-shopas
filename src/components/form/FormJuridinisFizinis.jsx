import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import Button from '../button/Button';
import Input from '../input/Input';
import CheckBox from '../checkBox/CheckBox';
import CartContext from './../../context/CartContext';

const FormJuridinisFizinis = ({ onSubmit, type, juridinis }) => {
  const cartContext = useContext(CartContext);
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
  const [error, setError] = useState(false);
  const orderedProducts = cartContext.cartArray;

  function returnUrl() {
    if (juridinis) {
      return 'https://jellyfish-app-xdnzk.ondigitalocean.app/control/juridiniai';
    }
    if (!juridinis) {
      return 'https://jellyfish-app-xdnzk.ondigitalocean.app/control/fiziniai';
    }
  }
  function collectDataFromInputsAndValidate() {
    let clientDataFromInputs = {};
    const name = userDetails.name;
    const surname = userDetails.pavarde;
    const imones_kodas = userDetails.kodas;
    const pvm_kodas = userDetails.pvmKodas;
    const imones_pav = userDetails.pavadinimas;
    const adresas = userDetails.adresas;
    const miestas = userDetails.miestas;
    const el_pastas = userDetails.email;
    const tel = userDetails.tel;
    console.log(
      'duomenysSURINKTI',
      name,
      surname,
      imones_kodas,
      pvm_kodas,
      imones_pav,
      adresas,
      miestas,
      el_pastas,
      tel
    );
    if (!juridinis) {
      console.log('ZZZZZZZZZfizinis');
      clientDataFromInputs = {
        name,
        surname,
        adresas,
        miestas,
        el_pastas,
        tel,
      };
      console.log('ZZZZZZZZZfizinis', clientDataFromInputs);
    }
    if (juridinis) {
      console.log('ZZZZZZZZZjuridinis');
      clientDataFromInputs = {
        imones_kodas,
        pvm_kodas,
        imones_pav,
        adresas,
        miestas,
        el_pastas,
        tel,
      };
    }
    console.log('clientDataFromInputs', clientDataFromInputs);
    return clientDataFromInputs;
  }
  async function FetchClientData() {
    if (orderedProducts.length) {
      const clientDataFromInputs = collectDataFromInputsAndValidate();
      const respClientData = await fetch(returnUrl(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(clientDataFromInputs),
      });
      console.log(
        'dataFromInputsFetch==========',
        JSON.stringify(clientDataFromInputs)
      );
      const dataClient = await respClientData.json();
      console.log('dataAfterClientDatafETCH', dataClient);
    }
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
        FetchClientData();
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
          name='pavarde'
          id='pavarde'
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
      <Button type='submit' disabled={orderedProducts.length ? false : true}>
        Apmokėti
      </Button>
    </Form>
  );
};

FormJuridinisFizinis.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['fizinis', 'juridinis']).isRequired,
};

export default FormJuridinisFizinis;

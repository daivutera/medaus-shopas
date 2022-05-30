import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import Button from '../button/Button';
import Input from '../input/Input';
import CheckBox from '../checkBox/CheckBox';
import CartContext from './../../context/CartContext';
import Message from './../message/Message';

const FormJuridinisFizinis = ({ onSubmit, type, juridinis }) => {
  const cartContext = useContext(CartContext);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
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

    if (!juridinis) {
      clientDataFromInputs = {
        name,
        surname,
        adresas,
        miestas,
        el_pastas,
        tel,
      };
    }
    if (juridinis) {
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
    return clientDataFromInputs;
  }
  async function FetchClientData() {
    setError(false);
    if (orderedProducts.length) {
      const clientDataFromInputs = collectDataFromInputsAndValidate();
      const respClientData = await fetch(returnUrl(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(clientDataFromInputs),
      });
      const dataClient = await respClientData.json();
      if (dataClient === false) {
        setError(true);
      } else {
        setSuccess(true);
      }
    }
  }
  async function sendOrderFetch() {
    orderedProducts.forEach(async (product) => {
      const totalAmount = product.product_price * product.product_quantity;
      const sendTo = `${userDetails.adresas} ${userDetails.miestas}`;
      const body = {
        juridinis: juridinis,
        amount: product.product_quantity,
        amount_total_EUR: totalAmount,
        product_id: product.product_id,
        product_name: product.product_name,
        send_to: sendTo,
        email: userDetails.email,
      };
      const resp = await fetch(
        'https://jellyfish-app-xdnzk.ondigitalocean.app/control/orders',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        }
      );
      const data = await resp.json();
      if (data === false) {
        setError(true);
      } else {
        setSuccess(true);
      }
    });
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
        sendOrderFetch();
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
      {error && (
        <Message color='red'>Įvyko klaida, užsakymas neišsiųstas</Message>
      )}
    </Form>
  );
};

FormJuridinisFizinis.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['fizinis', 'juridinis']).isRequired,
};

export default FormJuridinisFizinis;

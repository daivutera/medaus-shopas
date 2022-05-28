import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import CheckBox from '../components/checkBox/CheckBox';
import Table from '../components/table/Table';
import CartContext from '../context/CartContext';
import Button from '../components/button/Button';
import ContainerForPageContent from './../components/containers/ContainerForPageContent';
import { useNavigate } from 'react-router-dom';
import Message from './../components/message/Message';
import Input from '../components/input/Input';
import Form from './form/Form';

const PirkiniuKrepselis = () => {
  const Navigate = useNavigate();
  const cartContext = useContext(CartContext);
  const latestArr = cartContext.cartArray;
  const [message, setMessage] = useState(false);
  const [juridinis, setJuridinis] = useState(false);

  useEffect(() => {
    console.log('panaudotas table use effect pasikeite contect arr');
    console.log('latestArr', latestArr);
    getDataFromContext();
  }, [latestArr]);

  function getDataFromContext() {
    const list = latestArr.map((cartItem) => cartItem);
    console.log('list is pirkiniu krepselio', list);
    return <Table arr={latestArr} />;
  }

  function CheckifValidTobeRedirected() {
    setMessage(false);
    if (cartContext.numberInCart > 0) {
      Navigate('/uzsakymas');
    }
    setMessage(true);
  }

  function renderFormFizinis() {
    return (
      <Form formName='Fizinio asmens duomenys'>
        <Input
          type='text'
          name='name'
          id='name'
          placeholder='Vardas, pavardė'
        />
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
        <Button onClick={CheckifValidTobeRedirected}>Apmokėti </Button>
      </Form>
    );
  }

  function renderFormJuridinis() {
    return (
      <Form formName='Juridinio asmens duomenys'>
        <Input
          type='text'
          name='pavadinimas'
          id='pavadinimas'
          placeholder='Įmonės pavadinimas'
        />
        <Input
          type='number'
          name='kodas'
          id='kodas'
          placeholder='Imonės kodas'
        />
        <Input
          type='number'
          name='pvm-kodas'
          id='pvm-kodas'
          placeholder='PVM mokėtojo kodas'
        />
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
        <Button onClick={CheckifValidTobeRedirected}>Apmokėti </Button>
      </Form>
    );
  }
  return (
    <ContainerForPageContent>
      {getDataFromContext()}
      <Button onClick={() => setJuridinis(false)}>Fizinis asmuo</Button>
      <Button onClick={() => setJuridinis(true)}>Juridinis asmuo</Button>
      {!juridinis && renderFormFizinis()}
      {juridinis && renderFormJuridinis()}
      {message && (
        <Message color='red' height='max'>
          Jūsų krepšelis tuščias!
        </Message>
      )}
    </ContainerForPageContent>
  );
};

export default PirkiniuKrepselis;

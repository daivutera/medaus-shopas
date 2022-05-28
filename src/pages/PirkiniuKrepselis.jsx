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

const PirkiniuKrepselis = () => {
  const Navigate = useNavigate();
  const cartContext = useContext(CartContext);
  const latestArr = cartContext.cartArray;
  const [message, setMessage] = useState(false);

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

  return (
    <ContainerForPageContent>
      {getDataFromContext()}

      <Button>
        <CheckBox
          id='faktura'
          name='faktura'
          text='Reikės sąskaitos-faktūros'
        />
      </Button>
      <Button onClick={CheckifValidTobeRedirected}>Apmokėti </Button>
      {message && (
        <Message color='red' height='max'>
          Jūsų krepšelis tuščias!
        </Message>
      )}
      <form>
        <Input
          type='text'
          name='name'
          id='name'
          placeholder='Vardas, pavardė'
          label='Vardas, pavardė'
        />
      </form>
    </ContainerForPageContent>
  );
};

export default PirkiniuKrepselis;

import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import Table from '../components/table/Table';
import CartContext from '../context/CartContext';
import Button from '../components/button/Button';
import ContainerForPageContent from './../components/containers/ContainerForPageContent';
import Message from './../components/message/Message';
import FormJuridinisFizinis from './../components/form/FormJuridinisFizinis';
import UzsakymasPateiktas from './UzsakymasPateiktas';

const PirkiniuKrepselis = () => {
  const cartContext = useContext(CartContext);
  const [message, setMessage] = useState(false);
  const [juridinis, setJuridinis] = useState(false);
  const [orderSent, setOrderSend] = useState(false);
  const orderedProducts = cartContext.cartArray;

  useEffect(() => {
    getDataFromContextCreateTable();
  }, [orderedProducts]);

  function getDataFromContextCreateTable() {
    const list = orderedProducts.map((cartItem) => cartItem);
    if (!list) {
      return;
    }
    return <Table arr={orderedProducts} />;
  }

  function sendOrderDb() {
    CheckifValidToFinishPurchase();
    setOrderSend(true);
  }

  function CheckifValidToFinishPurchase() {
    setMessage(false);
    if (cartContext.numberInCart > 0) {
      const cartQuantity = cartContext.numberInCart;
      cartContext.editCartArrayRemove([]);
      cartContext.setNumberInCartMinus(cartQuantity);
    } else {
      setMessage(true);
    }
  }

  return (
    <ContainerForPageContent>
      {!orderSent && getDataFromContextCreateTable()}
      {!orderSent && (
        <Button onClick={() => setJuridinis(false)}>Fizinis asmuo</Button>
      )}
      {!orderSent && (
        <Button onClick={() => setJuridinis(true)}>Juridinis asmuo</Button>
      )}
      {!orderSent && (
        <FormJuridinisFizinis
          type={juridinis ? 'juridinis' : 'fizinis'}
          onSubmit={sendOrderDb}
          juridinis={juridinis}
        />
      )}

      {message && (
        <Message color='red' height='max'>
          Jūsų krepšelis tuščias!
        </Message>
      )}

      {orderSent && !message && <UzsakymasPateiktas />}
    </ContainerForPageContent>
  );
};

export default PirkiniuKrepselis;

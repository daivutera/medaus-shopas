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
  const [userDetailsContext, setUserDetailsContext] = useState(
    cartContext.inputs
  );

  useEffect(() => {
    console.log('pasikeite ordered');
    getDataFromContextCreateTable();
  }, [orderedProducts]);

  function getDataFromContextCreateTable() {
    const list = orderedProducts.map((cartItem) => cartItem);
    console.log('list is pirkiniu krepselio', list);
    if (!list) {
      return;
    }
    return <Table arr={orderedProducts} />;
  }

  async function sendOrderFetch() {
    orderedProducts.forEach(async (product) => {
      console.log('forEachproduct', product);
      const totalAmount = product.product_price * product.product_quantity;
      const sendTo = userDetailsContext.adresas + userDetailsContext.miestas;
      const body = {
        juridinis: juridinis,
        amount: product.product_quantity,
        amount_total_EUR: totalAmount,
        product_id: product.product_id,
        product_name: product.product_name,
        send_to: sendTo,
        email: userDetailsContext.email,
      };
      console.log('orderbody============', JSON.stringify(body));
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
      console.log('dataAfterOrderfETCH', data);
    });
  }

  function sendOrderDb() {
    CheckifValidToFinishPurchase();
    sendOrderFetch();
    setOrderSend(true);
  }

  function CheckifValidToFinishPurchase() {
    setMessage(false);
    if (cartContext.numberInCart > 0) {
      const cartArrlength = cartContext.cartArray.length;
      cartContext.editCartArrayRemove([]);
      cartContext.setNumberInCartMinus(cartArrlength);
      console.log('suveike CheckifValidToFinishPurchase');
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

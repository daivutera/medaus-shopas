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
    getDataFromContextCreateTable();
  }, [orderedProducts]);

  function returnUrl() {
    if (juridinis) {
      return 'https://jellyfish-app-xdnzk.ondigitalocean.app/control/juridiniai';
    }
    if (!juridinis) {
      return 'https://jellyfish-app-xdnzk.ondigitalocean.app/control/fiziniai';
    }
  }
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
  function collectDataFromInputsAndValidate() {
    console.log('??????????????????????');
    console.log('contextInputs', userDetailsContext);
    let clientDataFromInputs = {};

    const name = userDetailsContext.name;
    const surname = userDetailsContext.pavarde;
    const imones_kodas = userDetailsContext.kodas;
    const pvm_kodas = userDetailsContext.pvmKodas;
    const imones_pav = userDetailsContext.pavadinimas;
    const adresas = userDetailsContext.adresas;
    const miestas = userDetailsContext.miestas;
    const el_pastas = userDetailsContext.email;
    const tel = userDetailsContext.tel;
    console.log(
      'duomenyssurinkti',
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

  function sendOrderDb() {
    collectDataFromInputsAndValidate();
    FetchClientData();
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
        />
      )}

      {message && (
        <Message color='red' height='max'>
          Jūsų krepšelis tuščias!
        </Message>
      )}

      {orderSent && <UzsakymasPateiktas />}
    </ContainerForPageContent>
  );
};

export default PirkiniuKrepselis;

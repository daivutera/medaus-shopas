import React, { useEffect, useRef, useState } from 'react';
import { useContext } from 'react';
import Table from '../components/table/Table';
import CartContext from '../context/CartContext';
import Button from '../components/button/Button';
import ContainerForPageContent from './../components/containers/ContainerForPageContent';
import { useNavigate } from 'react-router-dom';
import Message from './../components/message/Message';
import FormJuridinisFizinis from './../components/form/FormJuridinisFizinis';

const PirkiniuKrepselis = () => {
  const Navigate = useNavigate();
  const cartContext = useContext(CartContext);
  const latestArr = cartContext.cartArray;
  const [message, setMessage] = useState(false);
  const [juridinis, setJuridinis] = useState(false);

  const dateObj = new Date();
  const timeStamp = `${dateObj.getFullYear()}-${
    dateObj.getUTCMonth() + 1
  }-${dateObj.getUTCDate()} ${dateObj.getHours()}:${dateObj.getMinutes()}`;

  useEffect(() => {
    console.log('panaudotas table use effect pasikeite contect arr');
    console.log('latestArr', latestArr);
    getDataFromContextCreateTable();
  }, [latestArr]);

  function getDataFromContextCreateTable() {
    const list = latestArr.map((cartItem) => cartItem);
    console.log('list is pirkiniu krepselio', list);
    if (!list) {
      return;
    }
    return <Table arr={latestArr} />;
  }
  function sendOrderDb() {
    console.log('onSubmitfunkcija');
    const contextClientData = cartContext.inputs;
    const orderedProducts = cartContext.cartArray;
    const orderDetails = orderedProducts.map((product) => [
      {
        juridinis: juridinis,
        amount: product.product_quantity,
        amount_total_EUR: product.product_price * product.product_quantity,
        order_date: timeStamp,
        product_id: product.product_id,
        product_name: product.product_name,
        send_to: contextClientData.adresas + contextClientData.miestas,
        email: contextClientData.email,
      },
    ]);
    console.log('orderDetails', orderDetails);

    console.log('contextInputs', contextClientData);
    let clientData = {};
    if (!juridinis) {
      clientData = {
        name: contextClientData.name,
        surname: contextClientData.pavarde,
        adresas: contextClientData.adresas,
        miestas: contextClientData.miestas,
        el_pastas: contextClientData.email,
        tel: contextClientData.tel,
      };
    }
    if (juridinis) {
      clientData = {
        imones_kodas: contextClientData.kodas,
        pvm_kodas: contextClientData.pvmKodas,
        imones_pav: contextClientData.pavadinimas,
        adresas: contextClientData.adresas,
        miestas: contextClientData.miestas,
        el_pastas: contextClientData.email,
        tel: contextClientData.tel,
      };
    }
    console.log('clientData', clientData);

    CheckifValidTobeRedirected();
  }

  function CheckifValidTobeRedirected() {
    setMessage(false);
    if (cartContext.numberInCart > 0) {
      // Navigate('/uzsakymas');
      console.log('laukiam');
    } else {
      setMessage(true);
    }
  }

  return (
    <ContainerForPageContent>
      {getDataFromContextCreateTable()}
      <Button onClick={() => setJuridinis(false)}>Fizinis asmuo</Button>
      <Button onClick={() => setJuridinis(true)}>Juridinis asmuo</Button>
      <FormJuridinisFizinis
        type={juridinis ? 'juridinis' : 'fizinis'}
        onSubmit={sendOrderDb}
      />
      :
      {message && (
        <Message color='red' height='max'>
          Jūsų krepšelis tuščias!
        </Message>
      )}
    </ContainerForPageContent>
  );
};

export default PirkiniuKrepselis;

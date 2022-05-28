import React, { useEffect, useState } from 'react';
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
    getDataFromContext();
  }, [latestArr]);

  function getDataFromContext() {
    const list = latestArr.map((cartItem) => cartItem);
    console.log('list is pirkiniu krepselio', list);
    return <Table arr={latestArr} />;
  }
  function sendOrderDb(e) {
    e.preventDefault();
    const orderedProducts = latestArr;

    const orderDetails = orderedProducts.map((product) => [
      {
        juridinis: juridinis,
        amount: product.product_quantity,
        amount_total_EUR: product.product_price * product.product_quantity,
        order_date: timeStamp,
        product_id: product.product_id,
        product_name: product.product_name,
        send_to: e.target.adresas + e.target.miestas,
        email: e.target.email,
      },
    ]);

    const clientDataFizinis = {
      name: e.target.name,
      surname: e.target.pavarde,
      adresas: e.target.adresas,
      miestas: e.target.miestas,
      el_pastas: e.target.email,
      tel: e.target.tel,
    };

    const clientDataJuridinis = {
      imones_kodas: e.target.kodas,
      pvm_kodas: e.target.pvmKodas,
      imones_pav: e.target.pavadinimas,
      adresas: e.target.adresas,
      miestas: e.target.miestas,
      el_pastas: e.target.email,
      tel: e.target.tel,
    };
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
      <Button onClick={() => setJuridinis(false)}>Fizinis asmuo</Button>
      <Button onClick={() => setJuridinis(true)}>Juridinis asmuo</Button>
      <FormJuridinisFizinis
        type={juridinis ? 'juridinis' : 'fizinis'}
        onClick={sendOrderDb}
        onSubmit={CheckifValidTobeRedirected}
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

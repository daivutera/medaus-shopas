import React, { useEffect, useState } from 'react';
import TableOrder from '../components/table/TableOrder';
import HeaderAdmin from './../components/header/HeaderAdmin';
import ContainerForPageContent from './../components/containers/ContainerForPageContent';

const Uzsakymai = () => {
  const token = localStorage.getItem('token');
  const [orders, setOrders] = useState([]);
  const URLorders =
    'https://jellyfish-app-xdnzk.ondigitalocean.app/control/orders';
  useEffect(
    () => async () => {
      setOrders(await getData());
    },
    []
  );

  const getData = async () => {
    const res = await fetch(URLorders, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    console.log('data', data);
    return data.data;
  };

  return (
    <>
      <HeaderAdmin />
      <ContainerForPageContent>
        <TableOrder arr={orders} />
      </ContainerForPageContent>
    </>
  );
};

export default Uzsakymai;

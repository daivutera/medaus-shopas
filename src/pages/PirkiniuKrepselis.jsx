import React from 'react';
import { useContext } from 'react';
import Table from '../components/table/Table';
import CartContext from '../context/CartContext';

const PirkiniuKrepselis = () => {
  const cartContext = useContext(CartContext);
  const list = cartContext.cartArray.map((cartItem) => cartItem);
  console.log('list', list);
  return (
    <div>
      <Table arr={list} />
    </div>
  );
};

export default PirkiniuKrepselis;

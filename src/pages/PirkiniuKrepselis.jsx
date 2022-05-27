import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import CheckBox from '../components/checkBox/CheckBox';
import Table from '../components/table/Table';
import CartContext from '../context/CartContext';
import * as S from './PirkiniuKrepselis.style';
import Button from '../components/button/Button';

const PirkiniuKrepselis = () => {
  const cartContext = useContext(CartContext);
  const latestArr = cartContext.cartArray;

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
  console.log('list', getDataFromContext());
  return (
    <S.Div>
      {getDataFromContext()}
      <Button>
        <CheckBox
          id='faktura'
          name='faktura'
          text='Reikės sąskaitos-faktūros'
        />
      </Button>
      <Button>Apmokėti</Button>
    </S.Div>
  );
};

export default PirkiniuKrepselis;

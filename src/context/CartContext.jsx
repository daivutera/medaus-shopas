import React from 'react';

const CartContext = React.createContext({
  cartArray: [],
  numberInCart: 0,
  totalSumCart: 0,
  inputs: {},
  error: false,
  editCartArray() {},
  editCartArrayRemove() {},
  setNumberInCartPlus() {},
  setNumberInCartMinus() {},
  setTotalSumCartFunc() {},
  setInputsFunc() {},
  setErrorFunc() {},
});
CartContext.displayName = 'CartContext';

export default CartContext;

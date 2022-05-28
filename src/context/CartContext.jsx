import React from 'react';

const CartContext = React.createContext({
  cartArray: [],
  numberInCart: 0,
  totalSumCart: 0,
  inputs: {},
  editCartArray() {},
  editCartArrayRemove() {},
  setNumberInCartPlus() {},
  setNumberInCartMinus() {},
  setTotalSumCartFunc() {},
  setInputsFunc() {},
});
CartContext.displayName = 'CartContext';

export default CartContext;

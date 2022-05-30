import React from 'react';

const CartContext = React.createContext({
  cartArray: [],
  numberInCart: 0,
  totalSumCart: 0,
  inputs: {},
  editInputs: {},
  addInputs: {},
  error: false,
  editCartArray() {},
  editCartArrayRemove() {},
  setNumberInCartPlus() {},
  setNumberInCartMinus() {},
  setTotalSumCartFunc() {},
  setInputsFunc() {},
  setEditInputsFunc() {},
  setAddInputsFunc() {},
  setErrorFunc() {},
});
CartContext.displayName = 'CartContext';

export default CartContext;

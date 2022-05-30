import React from 'react';

const CartContext = React.createContext({
  cartArray: [],
  numberInCart: 0,
  totalSumCart: 0,
  // error: false,
  editCartArray() {},
  editCartArrayRemove() {},
  setNumberInCartPlus() {},
  setNumberInCartMinus() {},
  setTotalSumCartFunc() {},
  // setErrorFunc() {},
});
CartContext.displayName = 'CartContext';

export default CartContext;

import React from 'react';

const CartContext = React.createContext({
  cartArray: [],
  numberInCart: 0,
  totalSumCart: 0,
  editCartArray() {},
  editCartArrayRemove() {},
  setNumberInCartPlus() {},
  setNumberInCartMinus() {},
  setTotalSumCartFunc() {},
});
CartContext.displayName = 'CartContext';

export default CartContext;

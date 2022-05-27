import React from 'react';

const CartContext = React.createContext({
  cartArray: [],
  numberInCart: 0,
  editCartArray() {},
  setNumberInCartPlus() {},
  setNumberInCartMinus() {},
});
CartContext.displayName = 'CartContext';

export default CartContext;

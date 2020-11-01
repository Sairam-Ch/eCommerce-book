import * as actionTypes from "./actionTypes";

export const addToCart = (cartItems) => {
  return {
    type: actionTypes.ADD_CART,
    cartItems: cartItems,
  };
};

export const orderNow = (cartItems) => {
  return {
    type: actionTypes.ORDER_NOW,
    cartItems: cartItems,
  };
};

export const removeFromCart = (cartItems) => {
  return {
    type: actionTypes.REMOVE_ITEM_FROM_CART,
    cartItems: cartItems,
  };
};

export const cleanCart = () => (dispatch) => {
  dispatch({
    type: actionTypes.CLEAR_CART,
  });
};

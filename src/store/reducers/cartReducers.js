import * as actionTypes from "../actions/actionTypes";
// import { browserHistory } from 'react-router-dom'

const initialState = {
  items: [],
  cartLength: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_CART:
      const cartItems = state.items;
      let alreadyExists = false;
      cartItems.forEach((x) => {
        if (x.title === action.cartItems.title) {
          alreadyExists = true;
          x.count++;
        }
      });
      if (!alreadyExists) {
        cartItems.push({ ...action.cartItems, count: 1 });
      }
      return {
        ...state,
        items: cartItems,
        cartLength: state.items.length,
      };
    case actionTypes.REMOVE_ITEM_FROM_CART:
      const updatedCart = [...state.items];
      const updatedItemIndex = updatedCart.findIndex(
        (item) => item.isbn === action.cartItems.isbn
      );

      updatedCart.splice(updatedItemIndex, 1);

      return {
        ...state,
        items: updatedCart,
        cartLength: state.items.length - 1,
      };
    case actionTypes.CLEAR_CART:
      // alert("Your order is successfully updated");
      // this.props.dispatch(registerStep1Success())
      // browserHistory.push('/ordersuccess')
      return {
        ...state,
        items: [],
        cartLength: "",
      };
    default:
      return state;
  }
};

export default reducer;

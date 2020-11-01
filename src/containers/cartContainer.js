import React, { Component } from "react";
import Cart from "../components/Orders/Cart";

import { connect } from "react-redux";
import * as actions from "../store/actions/index";

class CartContainer extends Component {
  proceed = () => {
    this.props.history.push("/checkout");
  };

  render() {
    return (
      <Cart
        cartItems={this.props.items}
        removeItem={this.props.onRemoveItem}
        proceed={this.proceed}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.cartState.items,
    cartLength: state.cartState.cartLength,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveItem: (item) => dispatch(actions.removeFromCart(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);

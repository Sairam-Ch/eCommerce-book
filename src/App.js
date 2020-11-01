import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/Header";
import CheckoutContainer from "./containers/checkoutContainer";
import ItemsContainer from "./containers/itemsContainer";
import CartContainer from "./containers/cartContainer";
import OrderSuccess from "./components/Orders/orderSucces"

import { connect } from "react-redux";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header cartLength={this.props.cartLength} />
        <div className="page-content">
          <Switch>
            <Route
              path="/checkout"
              component={(props) => <CheckoutContainer {...props} />}
            />
            <Route
              path="/cart"
              component={(props) => <CartContainer {...props} />}
            />
            <Route
              exact
              path="/item/:id"
              component={(props) => <ItemsContainer {...props} />}
            />
            <Route
              exact
              path="/item"
              component={(props) => <ItemsContainer {...props} />}
            />
            <Route
              exact
              path="/ordersuccess"
              component={(props) => <OrderSuccess {...props} />}
            />
            <Redirect from="/" to="/item" />
            <Route path="*" component={ItemsContainer} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartLength: state.cartState.cartLength,
  };
};

export default connect(mapStateToProps)(App);

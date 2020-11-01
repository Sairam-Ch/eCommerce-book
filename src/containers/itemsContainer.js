import React, { Component } from "react";
import Items from "../components/Items/Items";
import ItemDetails from "../components/Items/ItemDetails";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";

class ItemsContainer extends Component {
  state = {
    item: [],
  };

  componentDidMount() {
    this.props.onGetProducts();
  }

  render() {
    return (
      <React.Fragment>
        {this.props.match.url === "/item" ? (
          <Items
            item={this.props.item}
            individualProduct={this.props.onProductDetails}
            addToCart={this.props.onAddCart}
            buyNow={this.props.onOrderNow}
          />
        ) : (
          <ItemDetails
            item={this.state.item}
            addToCart={this.props.onAddCart}
            IndividualItem={this.props.IndividualItem}
          />
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    item: state.productsState.item,
    IndividualItem: state.productsState.IndividualItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetProducts: () => dispatch(actions.getProducts()),
    onProductDetails: (item) => dispatch(actions.productDetails(item)),
    onAddCart: (item) => dispatch(actions.addToCart(item)),
    onOrderNow: (item) => dispatch(actions.orderNow(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer);

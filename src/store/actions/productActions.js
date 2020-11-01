import * as actionTypes from "./actionTypes";
import axios from "axios";

export const setProducts = (item) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    item: item,
  };
};

export const fetchProductsFailed = () => {
  return {
    type: actionTypes.GET_PRODUCTS_FAILED,
  };
};

export const productDetails = (item) => {
  return {
    type: actionTypes.PRODUCT_DETAILS,
    item: item,
  };
};

export const getProducts = () => {
  return (dispatch) => {
    axios
      .get("https://api.jsonbin.io/b/5f9e6c15f5fc4329bb419508", {
        headers: {
          "secret-key":
            "$2b$10$8AK9t.dEwgbAdKyDKPO1euWIrkvqYemi2AQ/CyyaEPPJ1X7STmFjq",
        },
      })
      .then((res) => {
        dispatch(setProducts(res.data));
      })
      .catch((err) => {
        dispatch(fetchProductsFailed());
      });
  };
};

import * as actionTypes from "../actions/actionTypes";

const initialState = {
  item: [],
  IndividualItem: [],
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCTS:
      return {
        ...state,
        item: action.item,
        error: false,
      };
    case actionTypes.GET_PRODUCTS:
      return {
        ...state,
        error: true,
      };
    case actionTypes.PRODUCT_DETAILS:
      return {
        ...state,
        IndividualItem: action.item,
      };
  }
  return state;
};

export default reducer;

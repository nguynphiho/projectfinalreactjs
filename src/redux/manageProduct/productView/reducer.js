import {
  VIEW_PRODUCT_ERROR,
  VIEW_PRODUCT_REQUEST, VIEW_PRODUCT_SUCCESS,
} from "./constants";

const initState = {
  productSelected: null,
};

const viewProductReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case VIEW_PRODUCT_REQUEST:
      return { ...state, fetching: true };
    case VIEW_PRODUCT_SUCCESS:
      return { ...state, fetching: false, productSelected: payload };
    case VIEW_PRODUCT_ERROR:
      return { ...state, errMsg: payload };
    default:
      return state;
  }
};

export default viewProductReducer;

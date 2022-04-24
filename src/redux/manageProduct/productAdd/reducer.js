import {
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
} from "./constants";

const initState = {
  productAdded: null,
  fetching: false,
  errMsg: "",
};

const productAddReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT_REQUEST:
      return { ...state, fetching: true };
    case ADD_PRODUCT_SUCCESS:
      return { ...state, fetching: false, productAdded: payload };
    case ADD_PRODUCT_ERROR:
      return { ...state, errMsg: payload };
    default:
      return state;
  }
};

export default productAddReducer;

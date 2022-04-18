import {
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_ERROR,
  UPDATE_PRODUCT_IMAGE_REQUEST,
} from "./constants";

const initState = {
  productUpdated: null,
  fetching: false,
  errMsg: "",
};

const productUpdateReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case UPDATE_PRODUCT_REQUEST:
      return { ...state, fetching: true };
    case UPDATE_PRODUCT_IMAGE_REQUEST:
      return { ...state, fetching: true };
    case UPDATE_PRODUCT_SUCCESS:
      return { ...state, fetching: false, productUpdated: payload };
    case UPDATE_PRODUCT_ERROR:
      return { ...state, errMsg: payload };
    default:
      return state;
  }
};

export default productUpdateReducer;

import {
  FETCH_PRODUCTS_ASYNC,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_ERROR,
  FILTER_PRODUCT_REQUEST,
  DELETE_PRODUCT_REQUEST,
} from "./constants";

const initState = {
  fetching: false,
  products: [],
  errMsg: "",
};

const productReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCTS_ASYNC:
      return {
        ...state,
        fetching: true,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        fetching: false,
        products: payload,
      };
    case FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        fetching: false,
        errMsg: payload,
      };

    case DELETE_PRODUCT_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        fetching: false,
        products: state.products.filter((item) => item.id !== payload),
      };
    case DELETE_PRODUCT_ERROR:
      return {
        ...state,
        fetching: false,
        errMsg: payload,
      };

    case FILTER_PRODUCT_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    default:
      return state;
  }
};

export default productReducer;

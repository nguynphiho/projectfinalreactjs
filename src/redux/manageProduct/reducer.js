import {
  FETCH_PRODUCTS_ASYNC,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_ERROR,
  SEARCH_FILTER,
  VOTE_FILTER,
  CATEGORY_FILTER,
  STATUS_FILTER,
  GET_PRODUCT_BY_ID_ASYNC,
  GET_PRODUCT_BY_ID_SUCCESS,
} from "./constants";

const initState = {
  filter: {
    search: "",
    vote: null,
    category: null,
    status: null,
  },
  products: [],
  statuses: [],
  selectedProduct: null,
  fetching: false,
  errMsg: "",
};

const productReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCTS_ASYNC:
      return { ...state, fetching: true };
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, fetching: false, products: payload };
    case FETCH_ERROR:
      return { ...state, errMsg: payload };
    case SEARCH_FILTER:
      return { ...state, filter: { ...state.filter, search: payload } };
    case VOTE_FILTER:
      return { ...state, filter: { ...state.filter, vote: payload } };
    case CATEGORY_FILTER:
      return { ...state, filter: { ...state.filter, category: payload } };
    case STATUS_FILTER:
      return { ...state, filter: { ...state.filter, status: payload } };
    case GET_PRODUCT_BY_ID_ASYNC:
      return {...state, fetching: true};
    case GET_PRODUCT_BY_ID_SUCCESS:
      return {...state, selectedProduct: payload, fetching: false}
    default:
      return state;
  }
};

export default productReducer;

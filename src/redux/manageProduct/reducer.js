import {
  FETCH_PRODUCTS_ASYNC,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
  SEARCH_FILTER,
  VOTE_FILTER,
  CATEGORY_FILTER,
  STATUS_FILTER,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_ERROR,
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
  productSelected: null,
  fetching: false,
  errMsg: "",
};

const productReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCTS_ASYNC:
      return { ...state, fetching: true };
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, fetching: false, products: payload };
    case FETCH_PRODUCTS_ERROR:
      return { ...state, errMsg: payload };

    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: state.products.filter((item) => item.id !== payload),
      };
    case DELETE_PRODUCT_ERROR:
      return { ...state, errMsg: payload };

    case SEARCH_FILTER:
      console.log("seaching filter....");
      return { ...state, filter: { ...state.filter, search: payload } };
    case VOTE_FILTER:
      console.log("vote filter....");
      return { ...state, filter: { ...state.filter, vote: payload } };
    case CATEGORY_FILTER:
      console.log("category filter....");
      return { ...state, filter: { ...state.filter, category: payload } };
    case STATUS_FILTER:
      console.log("status filter....");
      return { ...state, filter: { ...state.filter, status: payload } };
    default:
      return state;
  }
};

export default productReducer;

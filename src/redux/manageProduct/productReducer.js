import {
  FETCH_PRODUCTS_ASYNC,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
  VIEW_PRODUCT,
  DELETE_PRODUCT,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  SEARCH_FILTER,
  VOTE_FILTER,
  CATEGORY_FILTER,
  STATUS_FILTER,
} from "./constant";
const initState = {
  filter: {
    search: "",
    vote: null,
    category: null,
    status: null,
  },
  products: [],
  productSelected: null,
  fetching: false,
  errMsg: "",
};

const productReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCTS_ASYNC:
      // console.log("fetching async");
      return { ...state, fetching: true };
    case FETCH_PRODUCTS_SUCCESS:
      // console.log("fetch success");
      return { ...state, fetching: false, products: payload };
    case FETCH_PRODUCTS_ERROR:
      // console.log("fetch error");
      return { ...state, errMsg: payload };
    case VIEW_PRODUCT:
      // console.log("view");
      return {
        ...state,
        productSelected: state.products.filter((item) => item.id === payload),
      };
    case DELETE_PRODUCT:
      // console.log("delete product");
      return {
        ...state,
        products: state.products.filter((item) => item.id !== payload),
      };
    case ADD_PRODUCT:
      // console.log("addproduct");
      return { ...state, products: [...state.products, payload] };
    case UPDATE_PRODUCT:
      // console.log("updateproduct");
      return { ...state, products: [...state.products, payload] };
    case SEARCH_FILTER:
      // console.log("seaching filter....");
      return { ...state, filter: { ...state.filter, search: payload } };
    case VOTE_FILTER:
      // console.log("vote filter....");
      return { ...state, filter: { ...state.filter, vote: payload } };
    case CATEGORY_FILTER:
      // console.log("category filter....");
      return { ...state, filter: { ...state.filter, category: payload } };
    case STATUS_FILTER:
      // console.log("status filter....");
      return { ...state, filter: { ...state.filter, status: payload } };
    default:
      return state;
  }
};

export default productReducer;

import {
  FETCH_PRODUCTS_ASYNC,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_ERROR,
  SEARCH_FILTER,
  VOTE_FILTER,
  CATEGORY_FILTER,
  STATUS_FILTER,
  DELETE_PRODUCT,
  GET_PRODUCT_BY_ID_ASYNC,
  GET_PRODUCT_BY_ID_SUCCESS,
} from "./constants";

export const fetchAllProductAsync = () => ({
  type: FETCH_PRODUCTS_ASYNC,
});

export const fetchAllProductSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchError = (error) => ({
  type: FETCH_ERROR,
  payload: error,
});

export const deleteProduct = (id) => ({
  type: DELETE_PRODUCT,
  payload: id,
});


export const searchFilter = (searchText) => ({
  type: SEARCH_FILTER,
  payload: searchText,
});

export const voteFilter = (value) => ({ type: VOTE_FILTER, payload: value });

export const statusFilter = (value) => ({
  type: STATUS_FILTER,
  payload: value,
});

export const categoryFilter = (value) => ({
  type: CATEGORY_FILTER,
  payload: value,
});

export const getProductByIdAsync = (id) => ({
  type: GET_PRODUCT_BY_ID_ASYNC,
  payload: id,
});

export const getProductByIdSuccess = (product) => ({
  type: GET_PRODUCT_BY_ID_SUCCESS,
  payload: product,
})

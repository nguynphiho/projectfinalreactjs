import {
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  FETCH_PRODUCTS_ASYNC,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
  VIEW_PRODUCT,
  SEARCH_FILTER,
  VOTE_FILTER,
  CATEGORY_FILTER,
  STATUS_FILTER,
} from "./constant";

export const fetchAllProductAsync = () => ({ type: FETCH_PRODUCTS_ASYNC });

export const fetchAllProductSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchAllProductError = (error) => ({
  type: FETCH_PRODUCTS_ERROR,
  payload: error,
});

export const viewProduct = (id) => ({ type: VIEW_PRODUCT, payload: id });

export const deleteProduct = (id) => ({ type: DELETE_PRODUCT, payload: id });

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product,
});

export const updateProduct = (product) => ({
  type: UPDATE_PRODUCT,
  payload: product,
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

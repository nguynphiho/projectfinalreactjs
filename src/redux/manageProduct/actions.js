import {
  FETCH_PRODUCTS_ASYNC,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
  SEARCH_FILTER,
  VOTE_FILTER,
  CATEGORY_FILTER,
  STATUS_FILTER,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_ERROR,
} from "./constants";

export const fetchAllProductAsync = () => ({
  type: FETCH_PRODUCTS_ASYNC,
});

export const fetchAllProductSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchAllProductError = (error) => ({
  type: FETCH_PRODUCTS_ERROR,
  payload: error,
});

export const deleteProductRequest = (id) => ({
  type: DELETE_PRODUCT_REQUEST,
  payload: id,
});

export const deleteProductSuccess = (id) => ({
  type: DELETE_PRODUCT_SUCCESS,
  payload: id,
});

export const deleteProductError = (error) => ({
  type: DELETE_PRODUCT_ERROR,
  payload: error,
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

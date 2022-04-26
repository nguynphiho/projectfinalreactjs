import {
  FETCH_PRODUCTS_ASYNC,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_ERROR,
  FILTER_PRODUCT_REQUEST,
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

export const filterProductRequest = (
  category,
  vote,
  status,
  search,
  price
) => ({
  type: FILTER_PRODUCT_REQUEST,
  payload: {
    category,
    vote,
    status,
    search,
    price,
  },
});

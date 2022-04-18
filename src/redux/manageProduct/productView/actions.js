import {
  VIEW_PRODUCT_ERROR,
  VIEW_PRODUCT_REQUEST, VIEW_PRODUCT_SUCCESS,
} from "./constants";

export const viewProductRequest = (id) => ({
  type: VIEW_PRODUCT_REQUEST,
  payload: id,
});

export const viewProductSuccess = (product) => ({
  type: VIEW_PRODUCT_SUCCESS,
  payload: product,
});

export const viewProductError = (error) => ({
  type: VIEW_PRODUCT_ERROR,
  payload: error,
});


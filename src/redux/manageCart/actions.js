import {
  CARTS_FETCH_ERROR,
  CARTS_FETCH_REQUEST,
  CARTS_FETCH_SUCCESS,
  CART_ADD_ERROR,
  CART_ADD_REQUEST,
  CART_ADD_SUCCESS,
  CART_DELETE_ERROR,
  CART_DELETE_REQUEST,
  CART_DELETE_SUCCESS,
  CART_CLEAR,
  CART_UPDATE_REQUEST,
  CART_UPDATE_SUCCESS,
  CART_UPDATE_ERROR,
} from "./constaints";

export const cartFetchRequest = () => {
  return {
    type: CARTS_FETCH_REQUEST,
  };
};

export const cartFetchSuccess = (carts) => {
  return {
    type: CARTS_FETCH_SUCCESS,
    payload: carts,
  };
};

export const cartFetchError = () => {
  return {
    type: CARTS_FETCH_ERROR,
  };
};

export const cartAddRequest = (cart) => {
  return {
    type: CART_ADD_REQUEST,
    payload: cart,
  };
};

export const cartAddSuccess = (cart) => {
  return {
    type: CART_ADD_SUCCESS,
    payload: cart,
  };
};

export const cartAddError = () => {
  return {
    type: CART_ADD_ERROR,
  };
};

export const cartDeleteRequest = (id) => {
  return {
    type: CART_DELETE_REQUEST,
    payload: id,
  };
};

export const cartDeleteSuccess = (id) => {
  return {
    type: CART_DELETE_SUCCESS,
    payload: id,
  };
};

export const cartDeleteError = (id) => {
  return {
    type: CART_DELETE_ERROR,
    payload: id,
  };
};

export const cartUpdateRequest = (data) => {
  return {
    type: CART_UPDATE_REQUEST,
    payload: data,
  };
};

export const cartUpdateSuccess = (data) => {
  return {
    type: CART_UPDATE_SUCCESS,
    payload: data,
  };
};

export const cartUpdateError = (data) => {
  return {
    type: CART_UPDATE_ERROR,
    payload: data,
  };
};

export const cartClear = () => {
  return {
    type: CART_CLEAR,
  };
};

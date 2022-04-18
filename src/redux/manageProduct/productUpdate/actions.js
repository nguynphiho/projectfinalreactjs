import {
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_ERROR,
  UPDATE_PRODUCT_IMAGE_REQUEST,
} from "./constants";

export const updateProduct = (product) => ({
  type: UPDATE_PRODUCT_REQUEST,
  payload: {
    product,
  },
});

export const updateProductImage = (product, image) => ({
  type: UPDATE_PRODUCT_IMAGE_REQUEST,
  payload: {
    product,
    image,
  },
});

export const updateProductSuccess = (product) => ({
  type: UPDATE_PRODUCT_SUCCESS,
  payload: product,
});

export const updateProductError = (error) => ({
  type: UPDATE_PRODUCT_ERROR,
  payload: error,
});

import { call, put, takeLatest } from "redux-saga/effects";
import productService from "services/productService";
import { OK } from "constants";
import { updateProduct, updateProductImage, updateProductError, updateProductSuccess } from "./actions";

function* productUpdateFlow({ payload }) {
  const { product } = payload;
  try {
    const response = yield call(productService.updateProduct, product);
    if (response && response.status === OK) {
      yield put(updateProductSuccess(response.data));
    } else {
      yield put(updateProductError("Error"));
    }
  } catch (error) {
    yield put(updateProductError(error));
  }
}

function* productImageUpdateFlow({ payload }) {
  const { product, image } = payload;
  try {
    const response = yield call(productService.updateProductImage, product, image);
    if (response && response.status === OK) {
      yield put(updateProductSuccess(response.data));
    } else {
      yield put(updateProductError("Error"));
    }
  } catch (error) {
    yield put(updateProductError(error));
  }
}

export function* productUpdateWatcher() {
  yield takeLatest(updateProduct().type, productUpdateFlow);
  yield takeLatest(updateProductImage().type, productImageUpdateFlow);
}

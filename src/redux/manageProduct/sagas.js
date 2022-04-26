import { call, put, takeLatest } from "redux-saga/effects";
import {
  deleteProductError,
  deleteProductRequest,
  deleteProductSuccess,
  fetchAllProductAsync,
  fetchAllProductError,
  fetchAllProductSuccess,
  filterProductRequest,
} from "./actions";
import productService from "services/productService";
import { OK } from "constants";

function* handleFetchAllProduct() {
  try {
    const response = yield call(productService.getProducts);
    if (response && response.status === OK) {
      yield put(fetchAllProductSuccess(response.data));
    } else {
      yield put(fetchAllProductError("Error"));
    }
  } catch (error) {
    yield put(fetchAllProductError(error));
  }
}

function* handleDeleteProduct({ payload }) {
  try {
    const response = yield call(productService.deleteProduct, payload);
    if (response && response.status === OK) {
      yield put(deleteProductSuccess(payload));
    } else {
      yield put(deleteProductError("Error"));
    }
  } catch (error) {
    yield put(deleteProductError(error));
  }
}

function* handleFilterProduct({ payload }) {
  try {
    const response = yield call(productService.filterProduct, payload);
    if (response && response.status === OK) {
      yield put(fetchAllProductSuccess(response.data));
    } else {
      yield put(fetchAllProductError("Error"));
    }
  } catch (error) {
    yield put(fetchAllProductError(error));
  }
}

export function* productWatcher() {
  yield takeLatest(fetchAllProductAsync().type, handleFetchAllProduct);
  yield takeLatest(deleteProductRequest().type, handleDeleteProduct);
  yield takeLatest(filterProductRequest().type, handleFilterProduct);
}

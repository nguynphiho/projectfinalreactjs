import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  addProduct,
  deleteProduct,
  fetchAllProductAsync,
  fetchAllProductError,
  fetchAllProductSuccess,
} from "./action";
import productService from "services/productService";
import { OK } from "constants";

function* handleFetchAllProduct() {
  try {
    const response = yield call(productService.getProducts);
    if (response && response.status === OK) {
      yield put(fetchAllProductSuccess(response.data));
    } else {
      yield put(fetchAllProductError("Error..."));
    }
  } catch (error) {
    yield put(fetchAllProductError(error));
  }
}

function* handleDeleteProduct() {
  try {
    yield call(productService.deleteProductApi, deleteProduct().payload);
  } catch (error) {
    yield put(fetchAllProductError(error));
  }
}

function* handleAddProduct() {
  try {
    yield call(productService.saveProduct, addProduct().payload);
  } catch (error) {
    yield put(fetchAllProductError(error));
  }
}

export function* productWatcher() {
  yield takeEvery(fetchAllProductAsync().type, handleFetchAllProduct);
  yield takeLatest(deleteProduct().type, handleDeleteProduct);
  yield takeLatest(addProduct().type, handleAddProduct);
}

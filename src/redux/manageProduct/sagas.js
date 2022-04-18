import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  deleteProductError,
  deleteProductRequest,
  deleteProductSuccess,
  fetchAllProductAsync,
  fetchAllProductError,
  fetchAllProductSuccess,
  searchFilter,
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
    const response = yield call(productService.deleteProductApi, payload);
    if (response && response.status === OK) {
      yield put(deleteProductSuccess(payload));
    } else {
      yield put(deleteProductError("Error"));
    }
  } catch (error) {
    yield put(deleteProductError(error));
  }
}

function* handleSearchFilter(action) {
  yield console.log("search filter");
  try {
    yield console.log("fetching search product....");
    const response = yield call(productService.searchProduct, action.payload);
    if (response && response.status === OK) {
      yield put(fetchAllProductSuccess(response.data));
    } else {
      yield put(fetchAllProductError("Error..."));
    }
  } catch (error) {
    yield put(fetchAllProductError(error));
  }
}

export function* productWatcher() {
  yield takeEvery(fetchAllProductAsync().type, handleFetchAllProduct);
  yield takeLatest(deleteProductRequest().type, handleDeleteProduct);
  yield takeLatest(searchFilter().type, handleSearchFilter);
}

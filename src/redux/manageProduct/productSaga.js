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

function* handleFetchAllProduct () {
  try {
    yield console.log("fetching product....");
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

function* handleDeleteProduct () {
  yield console.log("delete product has Id:");
  try {
    yield call(productService.deleteProductApi, deleteProduct.payload);
    yield console.log("delete product has Id:", deleteProduct.payload);
  } catch (error) {
    yield put(fetchAllProductError(error));
  }
}

function* handleAddProduct () {
  yield console.log("addProduct");
  try {
    yield call(productService.saveProduct, addProduct.payload);
  } catch (error) {
    yield put(fetchAllProductError(error));
  }
}

export function* productWatcher () {
  yield takeEvery(fetchAllProductAsync().type, handleFetchAllProduct);
  yield takeLatest(deleteProduct().type, handleDeleteProduct);
  yield takeLatest(addProduct().type, handleAddProduct);
}

import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import productService from "services/productService";
import { OK } from "constants";
import {
  fetchAllProductAsync,
  fetchAllProductSuccess,
  fetchError,
  getProductByIdAsync,
  getProductByIdSuccess
} from 'redux/manageProduct/actions'

function* handleFetchAllProduct() {
  try{
    const response = yield call(productService.getProducts)
    if (response && response.status === OK) {
      yield put(fetchAllProductSuccess(response.data));
    } else {
      yield put(fetchError('Lỗi rồi nha....!'))
    }
  } catch (error) {
    yield put(fetchError('Lỗi rồi nha....!'))
  }
}

function* handleFetchProductById({ payload }) {
  try {
    const response = yield call(productService.getProductById, payload);
    if (response && response.status >= OK && response.status < 300) {
      yield put(getProductByIdSuccess(response.data));
    } else {
      yield put(fetchError('Lỗi rồi nha....!'))
    }
  } catch (error) {
    yield put(fetchError('Lỗi rồi nha....!'))
  }
}

// function* handleAddProduct() {

// }

export function* productWatcher() {
  yield takeEvery(fetchAllProductAsync().type, handleFetchAllProduct);
  yield takeEvery(getProductByIdAsync().type, handleFetchProductById);
  
}

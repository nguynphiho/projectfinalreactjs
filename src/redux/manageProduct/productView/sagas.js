import { call, put, takeLatest } from "redux-saga/effects";
import {
  viewProductError,
  viewProductRequest,
  viewProductSuccess,
} from "./actions";
import productService from "services/productService";
import { OK } from "constants";

function* viewProductFlow({ payload }) {
  try {
    const response = yield call(productService.getProduct, payload);
    if (response && response.status === OK) {
      yield put(viewProductSuccess(response.data));
    } else {
      yield put(viewProductError("Error"));
    }
  } catch (error) {
    yield put(viewProductError(error));
  }
}

export function* viewProductWatcher() {
  yield takeLatest(viewProductRequest().type, viewProductFlow);
}

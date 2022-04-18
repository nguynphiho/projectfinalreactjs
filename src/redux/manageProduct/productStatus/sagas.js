import { call, put, takeLatest } from "redux-saga/effects";
import {
  requestStatuses,
  requestStatusesError,
  requestStatusesSuccess,
} from "./actions";
import productService from "services/productService";
import { OK } from "constants";

function* statusFlow() {
  try {
    const response = yield call(productService.getStatusesProduct);
    if (response && response.status === OK) {
      yield put(requestStatusesSuccess(response.data));
    } else {
      yield put(requestStatusesError("Error"));
    }
  } catch (error) {
    yield put(requestStatusesError(error));
  }
}

export function* statusWatcher() {
  yield takeLatest(requestStatuses().type, statusFlow);
}

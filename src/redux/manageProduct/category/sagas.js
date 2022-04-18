import { call, put, takeLatest } from "redux-saga/effects";
import {
  requestCategories,
  requestCategoriesError,
  requestCategoriesSuccess,
} from "./actions";
import productService from "services/productService";
import { OK } from "constants";

function* categoryFlow() {
  try {
    const response = yield call(productService.getCategories);
    if (response && response.status === OK) {
      yield put(requestCategoriesSuccess(response.data));
    } else {
      yield put(requestCategoriesError("Request categories failed"));
    }
  } catch (error) {
    yield put(requestCategoriesError(error));
  }
}

export function* categoryWatcher() {
  yield takeLatest(requestCategories().type, categoryFlow);
}

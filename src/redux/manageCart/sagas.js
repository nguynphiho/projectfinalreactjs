import { call, put, takeLatest } from "redux-saga/effects";
import {
  cartAddError,
  cartAddRequest,
  cartAddSuccess,
  cartDeleteError,
  cartDeleteRequest,
  cartDeleteSuccess,
  cartFetchError,
  cartFetchRequest,
  cartFetchSuccess,
  cartUpdateError,
  cartUpdateRequest,
  cartUpdateSuccess,
} from "./actions";
import cartService from "services/cartService";
import { OK, CREATED } from "constants";

function* cartFetchRequestFlow({ payload }) {
  try {
    const response = yield call(cartService.getAllCarts, payload);
    if (response && response.status === OK) {
      yield put(cartFetchSuccess(response.data));
    } else {
      yield put(cartFetchError("Error"));
    }
  } catch (error) {
    yield put(cartFetchError(error));
  }
}

function* cartAddRequestFlow({ payload }) {
  try {
    const response = yield call(cartService.addToCart, payload);
    if (response && response.status === CREATED) {
      yield put(cartAddSuccess(response.data));
    } else {
      yield put(cartAddError("Error"));
    }
  } catch (error) {
    yield put(cartAddError(error));
  }
}

function* cartUpdateRequestFlow({ payload }) {
  try {
    const response = yield call(cartService.updateCart, payload);
    if (response && response.status === OK) {
      yield put(cartUpdateSuccess(payload));
    } else {
      yield put(cartUpdateError("Error"));
    }
  } catch (error) {
    yield put(cartUpdateError(error));
  }
}

function* cartDeleteRequestFlow({ payload }) {
  try {
    const response = yield call(cartService.deleteCart, payload);
    if (response && response.status === OK) {
      yield put(cartDeleteSuccess(payload));
    } else {
      yield put(cartDeleteError("Error"));
    }
  } catch (error) {
    yield put(cartDeleteError(error));
  }
}

export function* cartWatcher() {
  yield takeLatest(cartFetchRequest().type, cartFetchRequestFlow);
  yield takeLatest(cartAddRequest().type, cartAddRequestFlow);
  yield takeLatest(cartUpdateRequest().type, cartUpdateRequestFlow);
  yield takeLatest(cartDeleteRequest().type, cartDeleteRequestFlow);
}

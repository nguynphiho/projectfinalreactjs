import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { OK } from "../../constants";
import { userService } from "../../services/userService";
import {
  fetchAllUserAsync,
  fetchAllUserSuccess,
  fetchError,
  getUserByIdAsync,
  getUserByIdSuccess
} from "./action";

function* handleFetchUser() {
  try {
    const response = yield call(userService.getUsers);
    if (response && response.status === OK) {
      yield put(fetchAllUserSuccess(response.data));
    } else {
      yield put(fetchError("Error...."))
    }
  } catch (error) {
    yield put(fetchError(error))
  }
}

function* handleGetUserById({ payload }) {
  try {
    const response = yield call(userService.getUserById, payload)
    if (response && response.status >=200 && response.status < 300) {
      yield put(getUserByIdSuccess(response.data))
    } else {
      yield put(fetchError("Loi roi nha...!"))
    }
  } catch (errors) {
    yield put(fetchError("Loi roi nha...!"))
  }
}

export function* userWatcher() {
  yield takeEvery(fetchAllUserAsync().type, handleFetchUser);
  yield takeLatest(getUserByIdAsync().type, handleGetUserById);
}
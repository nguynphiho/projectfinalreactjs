import { call, put, takeLatest } from "redux-saga/effects";
import {
  userProfileError,
  userProfileRequest,
  userProfileSuccess,
} from "./actions";
import { OK } from "constants";
import userService from "services/userService";

function* userProfileRequestFlow() {
  try {
    const response = yield call(userService.getUserProfile);
    if (response && response.status === OK) {
      yield put(userProfileSuccess(response.data));
    } else {
      yield put(userProfileError("Error"));
    }
  } catch (error) {
    yield put(userProfileError(error));
  }
}

export function* userProfileWatcher() {
  yield takeLatest(userProfileRequest().type, userProfileRequestFlow);
}

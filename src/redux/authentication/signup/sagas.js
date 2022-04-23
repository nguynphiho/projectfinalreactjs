import { call, put, takeLatest } from "redux-saga/effects";
import authenticationService from "../../../services/authenticationService";
import { OK } from "../../../constants";
import { SIGNUP_ERROR, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./constants";

function* signupFlow(action) {
  try {
    const response = yield call(authenticationService.register, action.account);
    if (response && response.status === OK) {
      yield put({
        type: SIGNUP_SUCCESS,
      });
    } else {
      yield put({
        type: SIGNUP_ERROR,
      });
    }
  } catch (error) {
    yield put({
      type: SIGNUP_ERROR,
    });
  }
}

function* signupWatcher() {
  yield takeLatest(SIGNUP_REQUEST, signupFlow);
}

export default signupWatcher;

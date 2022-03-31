import { call, put, takeLatest } from "redux-saga/effects";
import authenticationService from "../../services/authenticationService";
import { OK } from "../../constants";
import {
  FORGOT_PASSWORD_ERROR,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
} from "./constants";

function* forgotPasswordFlow(action) {
  try {
    const response = yield call(
      authenticationService.forgotPassword,
      action.payload
    );
    if (response && response.status === OK) {
      yield put({
        type: FORGOT_PASSWORD_SUCCESS,
      });
    } else {
      yield put({
        type: FORGOT_PASSWORD_ERROR,
      });
    }
  } catch (error) {
    yield put({
      type: FORGOT_PASSWORD_ERROR,
    });
  }
}

function* forgotPasswordWatcher() {
  yield takeLatest(FORGOT_PASSWORD_REQUEST, forgotPasswordFlow);
}

export default forgotPasswordWatcher;

import { call, put, takeLatest } from "redux-saga/effects";
import authenticationService from "../../services/authenticationService";
import { OK } from "../../constants";
import {
  CHANGE_PASSWORD_ERROR,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
} from "./constants";

function* changePasswordFlow(action) {
  try {
    const response = yield call(
      authenticationService.changePassword,
      action.payload
    );
    if (response && response.status === OK) {
      yield put({
        type: CHANGE_PASSWORD_SUCCESS,
      });
    } else {
      yield put({
        type: CHANGE_PASSWORD_ERROR,
      });
    }
  } catch (error) {
    yield put({
      type: CHANGE_PASSWORD_ERROR,
    });
  }
}

function* changePasswordWatcher() {
  yield takeLatest(CHANGE_PASSWORD_REQUEST, changePasswordFlow);
}

export default changePasswordWatcher;

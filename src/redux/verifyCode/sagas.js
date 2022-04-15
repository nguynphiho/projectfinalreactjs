import { call, put, takeLatest } from "redux-saga/effects";
import authenticationService from "../../services/authenticationService";
import { OK } from "../../constants";
import {
  VERIFY_CODE_ERROR,
  VERIFY_CODE_REQUEST,
  VERIFY_CODE_SUCCESS,
} from "./constants";

function* verifyCodeFlow (action) {
  try {
    const response = yield call(
      authenticationService.verifyCode,
      action.payload
    );
    if (response && response.status === OK) {
      yield put({
        type: VERIFY_CODE_SUCCESS,
      });
    } else {
      yield put({
        type: VERIFY_CODE_ERROR,
      });
    }
  } catch (error) {
    yield put({
      type: VERIFY_CODE_ERROR,
    });
  }
}

function* verifyCodeWatcher () {
  yield takeLatest(VERIFY_CODE_REQUEST, verifyCodeFlow);
}

export default verifyCodeWatcher;

import { call, put, takeLatest } from "redux-saga/effects";
import authenticationService from "../../../services/authenticationService";
import { SIGNIN_ERROR, SIGNIN_REQUEST, SIGNIN_SUCCESS } from "./constants";
import { OK } from "../../../constants";

function* signinFlow(action) {
  try {
    const response = yield call(authenticationService.login, action.acount);
    if (response && response.status === OK) {
      yield put({
        type: SIGNIN_SUCCESS,
        payload: response.data,
      });
    } else {
      yield put({
        type: SIGNIN_ERROR,
      });
    }
  } catch (error) {
    yield put({
      type: SIGNIN_ERROR,
    });
  }
}

function* signinWatcher() {
  yield takeLatest(SIGNIN_REQUEST, signinFlow);
}

export default signinWatcher;

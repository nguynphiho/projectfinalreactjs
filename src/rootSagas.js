import { all } from "redux-saga/effects";
import signinWatcher from "redux/signin/sagas";
import signupWatcher from "redux/signup/sagas";

function* RootSagas() {
  yield all([signinWatcher(), signupWatcher()]);
}

export default RootSagas;

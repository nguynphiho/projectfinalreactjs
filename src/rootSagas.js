import { all } from "redux-saga/effects";
import signinWatcher from "redux/signin/sagas";
import signupWatcher from "redux/signup/sagas";
import { productWatcher } from "redux/manageProduct/productSaga"

function* RootSagas() {
  yield all([signinWatcher(), signupWatcher(), productWatcher()]);
}

export default RootSagas;

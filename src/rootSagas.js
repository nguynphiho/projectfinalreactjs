import { all } from "redux-saga/effects";
import signinWatcher from "redux/signin/sagas";
import signupWatcher from "redux/signup/sagas";
import { productWatcher } from "redux/manageProduct/productSaga"
import forgotPasswordWatcher from "redux/forgotPassword/sagas";
import verifyCodeWatcher from "redux/verifyCode/sagas";
import changePasswordWatcher from "redux/changePassword/sagas";

function* RootSagas() {
  yield all([
    signinWatcher(),
    signupWatcher(),
    forgotPasswordWatcher(),
    verifyCodeWatcher(),
    changePasswordWatcher(),
    productWatcher()
  ]);
}

export default RootSagas;

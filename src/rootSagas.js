import { all } from "redux-saga/effects";
import signinWatcher from "redux/signin/sagas";
import signupWatcher from "redux/signup/sagas";
<<<<<<< HEAD
import { productWatcher } from "redux/manageProduct/productSaga"

function* RootSagas() {
  yield all([signinWatcher(), signupWatcher(), productWatcher()]);
=======
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
  ]);
>>>>>>> master
}

export default RootSagas;

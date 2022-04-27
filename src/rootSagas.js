import { all } from "redux-saga/effects";
import signinWatcher from "redux/authentication/signin/sagas";
import signupWatcher from "redux/authentication/signup/sagas";
import { productWatcher } from "redux/manageProduct/productSaga";
import forgotPasswordWatcher from "redux/authentication/forgotPassword/sagas";
import verifyCodeWatcher from "redux/authentication/verifyCode/sagas";
import changePasswordWatcher from "redux/authentication/changePassword/sagas";
import { userWatcher } from 'redux/manageUser/userSaga';
function* RootSagas() {
  yield all([
    signinWatcher(),
    signupWatcher(),
    forgotPasswordWatcher(),
    verifyCodeWatcher(),
    changePasswordWatcher(),
    productWatcher(),
    userWatcher()
  ]);
}

export default RootSagas;

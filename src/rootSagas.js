import { all } from "redux-saga/effects";
import signinWatcher from "redux/authentication/signin/sagas";
import signupWatcher from "redux/authentication/signup/sagas";
import { productWatcher } from "redux/manageProduct/sagas";
import forgotPasswordWatcher from "redux/authentication/forgotPassword/sagas";
import verifyCodeWatcher from "redux/authentication/verifyCode/sagas";
import changePasswordWatcher from "redux/authentication/changePassword/sagas";
import { categoryWatcher } from "redux/manageProduct/category/sagas";
import { statusWatcher } from "redux/manageProduct/productStatus/sagas";
import { viewProductWatcher } from "redux/manageProduct/productView/sagas";
import { userWatcher } from 'redux/manageUser/userSaga';
function* RootSagas() {
  yield all([
    signinWatcher(),
    signupWatcher(),
    forgotPasswordWatcher(),
    verifyCodeWatcher(),
    changePasswordWatcher(),
    productWatcher(),
    categoryWatcher(),
    statusWatcher(),
    viewProductWatcher(),
    userWatcher()
  ]);
}

export default RootSagas;

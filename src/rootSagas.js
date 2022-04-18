import { all } from "redux-saga/effects";
import signinWatcher from "redux/signin/sagas";
import signupWatcher from "redux/signup/sagas";
import { productWatcher } from "redux/manageProduct/sagas";
import forgotPasswordWatcher from "redux/forgotPassword/sagas";
import verifyCodeWatcher from "redux/verifyCode/sagas";
import changePasswordWatcher from "redux/changePassword/sagas";
import { categoryWatcher } from "redux/category/sagas";
import { statusWatcher } from "redux/productStatus/sagas";
import { productAddWatcher } from "redux/productAdd/sagas";

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
    productAddWatcher(),
  ]);
}

export default RootSagas;

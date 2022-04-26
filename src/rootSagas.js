import { all } from "redux-saga/effects";
import signinWatcher from "redux/authentication/signin/sagas";
import signupWatcher from "redux/authentication/signup/sagas";
import { productWatcher } from "redux/manageProduct/sagas";
import forgotPasswordWatcher from "redux/authentication/forgotPassword/sagas";
import verifyCodeWatcher from "redux/authentication/verifyCode/sagas";
import changePasswordWatcher from "redux/authentication/changePassword/sagas";
import { categoryWatcher } from "redux/manageProduct/category/sagas";
import { statusWatcher } from "redux/manageProduct/productStatus/sagas";
import { productAddWatcher } from "redux/manageProduct/productAdd/sagas";
import { productUpdateWatcher } from "redux/manageProduct/productUpdate/sagas";
import { viewProductWatcher } from "redux/manageProduct/productView/sagas";
import { cartWatcher } from "redux/manageCart/sagas";
import { userProfileWatcher } from "redux/userProfile/sagas";

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
    productUpdateWatcher(),
    viewProductWatcher(),
    cartWatcher(),
    userProfileWatcher(),
  ]);
}

export default RootSagas;

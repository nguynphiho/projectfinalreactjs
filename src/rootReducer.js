import { combineReducers } from "redux";
import signinReducer from "./redux/authentication/signin/reducer";
import signupReducer from "./redux/authentication/signup/reducer";
import productReducer from "./redux/manageProduct/reducer";
import cartReducer from "redux/cart/reducer";
import forgotPasswordReducer from "./redux/authentication/forgotPassword/reducer";
import verifyCodeReducer from "./redux/authentication/verifyCode/reducer";
import changePasswordReducer from "./redux/authentication/changePassword/reducer";
import categoryReducer from "./redux/manageProduct/category/reducer";
import statusReducer from "./redux/manageProduct/productStatus/reducer";
import productAddReducer from "./redux/manageProduct/productAdd/reducer";
import productUpdateReducer from "./redux/manageProduct/productUpdate/reducer";
import viewProductReducer from "./redux/manageProduct/productView/reducer";

const RootReducer = combineReducers({
  signinReducer,
  signupReducer,
  productReducer,
  forgotPasswordReducer,
  verifyCodeReducer,
  changePasswordReducer,
  cartReducer,
  categoryReducer,
  statusReducer,
  productAddReducer,
  productUpdateReducer,
  viewProductReducer
});

export default RootReducer;

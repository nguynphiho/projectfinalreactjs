import { combineReducers } from "redux";
import signinReducer from "./redux/authentication/signin/reducer";
import signupReducer from "./redux/authentication/signup/reducer";
import productReducer from "./redux/manageProduct/reducer";
import cartReducer from "redux/manageCart/reducer";
import forgotPasswordReducer from "./redux/authentication/forgotPassword/reducer";
import verifyCodeReducer from "./redux/authentication/verifyCode/reducer";
import changePasswordReducer from "./redux/authentication/changePassword/reducer";
import categoryReducer from "./redux/manageProduct/category/reducer";
import statusReducer from "./redux/manageProduct/productStatus/reducer";
import productAddReducer from "./redux/manageProduct/productAdd/reducer";
import productUpdateReducer from "./redux/manageProduct/productUpdate/reducer";
import viewProductReducer from "./redux/manageProduct/productView/reducer";
import messageReducer from "./redux/message/reducer";
import userProfileReducer from "./redux/userProfile/reducer";

const RootReducer = combineReducers({
  signinReducer,
  signupReducer,
  forgotPasswordReducer,
  verifyCodeReducer,
  changePasswordReducer,
  productReducer,
  categoryReducer,
  statusReducer,
  productAddReducer,
  productUpdateReducer,
  viewProductReducer,
  cartReducer,
  messageReducer,
  userProfileReducer,
});

export default RootReducer;

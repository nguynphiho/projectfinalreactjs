import { combineReducers } from "redux";
import userReducer from "./redux/manageUser/userReducer";
import signinReducer from "./redux/authentication/signin/reducer";
import signupReducer from "./redux/authentication/signup/reducer";
import productReducer from "./redux/manageProduct/reducer";
import cartReducer from "redux/cart/reducer";
import forgotPasswordReducer from "./redux/authentication/forgotPassword/reducer";
import verifyCodeReducer from "./redux/authentication/verifyCode/reducer";
import changePasswordReducer from "./redux/authentication/changePassword/reducer";

const RootReducer = combineReducers({
  signinReducer,
  signupReducer,
  productReducer,
  forgotPasswordReducer,
  verifyCodeReducer,
  changePasswordReducer,
  cartReducer,
  userReducer,
});

export default RootReducer;

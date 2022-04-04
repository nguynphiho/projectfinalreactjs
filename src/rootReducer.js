import { combineReducers } from "redux";
import signinReducer from "./redux/signin/reducer";
import signupReducer from "./redux/signup/reducer";
import cartReducer from "redux/addToCart/reducer";
import forgotPasswordReducer from "./redux/forgotPassword/reducer";
import verifyCodeReducer from "./redux/verifyCode/reducer";
import changePasswordReducer from "./redux/changePassword/reducer";

const RootReducer = combineReducers({
  signinReducer,
  signupReducer,
  forgotPasswordReducer,
  verifyCodeReducer,
  changePasswordReducer,
  cartReducer
});

export default RootReducer;

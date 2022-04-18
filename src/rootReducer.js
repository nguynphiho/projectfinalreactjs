import { combineReducers } from "redux";
import signinReducer from "./redux/signin/reducer";
import signupReducer from "./redux/signup/reducer";
import productReducer from "./redux/manageProduct/reducer";
import cartReducer from "redux/addToCart/reducer";
import forgotPasswordReducer from "./redux/forgotPassword/reducer";
import verifyCodeReducer from "./redux/verifyCode/reducer";
import changePasswordReducer from "./redux/changePassword/reducer";
import categoryReducer from "./redux/category/reducer";
import statusReducer from "./redux/productStatus/reducer";
import productAddReducer from "./redux/productAdd/reducer";

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
});

export default RootReducer;

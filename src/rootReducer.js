import { combineReducers } from "redux";
import signinReducer from "./redux/signin/reducer";
import signupReducer from "./redux/signup/reducer";
import cartReducer from "redux/addToCart/reducer";
const RootReducer = combineReducers({
  signinReducer,
  signupReducer,
  cartReducer,
});

export default RootReducer;

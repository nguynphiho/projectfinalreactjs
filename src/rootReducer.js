import { combineReducers } from "redux";
import signinReducer from "./redux/signin/reducer";
import signupReducer from "./redux/signup/reducer";

const RootReducer = combineReducers({
  signinReducer,
  signupReducer,
});

export default RootReducer;

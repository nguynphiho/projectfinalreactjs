import { combineReducers } from "redux";
import signinReducer from "./redux/signin/reducer";
import signupReducer from "./redux/signup/reducer";
import productReducer from './redux/manageProduct/productReducer'

const RootReducer = combineReducers({
  signinReducer,
  signupReducer,
  productReducer,
});

export default RootReducer;

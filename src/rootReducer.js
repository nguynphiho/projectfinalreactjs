import { combineReducers } from "redux";
import signinReducer from "./redux/signin/reducer";

const RootReducer = combineReducers({
  signinReducer,
});

export default RootReducer;

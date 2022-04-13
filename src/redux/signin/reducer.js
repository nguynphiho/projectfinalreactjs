import {
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_ERROR,
  SIGNIN_RESET,
} from "./constants";

const initialState = {
  loading: false,
  user: null,
  error: false,
  messageError: "",
};

const signinReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_REQUEST:
      return {
        loading: true,
        user: null,
        error: false,
        messageError: "",
      };
    case SIGNIN_SUCCESS:
      return {
        loading: false,
        user: action.payload,
        error: false,
        messageError: "",
      };
    case SIGNIN_ERROR:
      return {
        loading: false,
        user: null,
        error: true,
        messageError: "Signin failed.",
      };
    case SIGNIN_RESET:
      return {
        loading: false,
        user: null,
        error: false,
        messageError: "",
      };
    default:
      return state;
  }
};

export default signinReducer;

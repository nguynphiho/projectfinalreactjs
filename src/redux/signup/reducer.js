const {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  SIGNUP_RESET,
} = require("./constants");

const initialState = {
  loading: false,
  success: false,
  error: false,
  messageError: "",
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        loading: true,
        success: false,
        error: false,
        messageError: "",
      };

    case SIGNUP_SUCCESS:
      return {
        loading: false,
        success: true,
        error: false,
        messageError: "",
      };
    case SIGNUP_ERROR:
      return {
        loading: false,
        success: false,
        error: true,
        messageError: "Signup failed.",
      };
    case SIGNUP_RESET:
      return {
        loading: false,
        success: false,
        error: false,
        messageError: "",
      };
    default:
      return state;
  }
};

export default signupReducer;

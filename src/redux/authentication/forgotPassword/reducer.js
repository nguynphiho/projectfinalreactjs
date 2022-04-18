import {
  FORGOT_PASSWORD_ERROR,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_RESET,
  FORGOT_PASSWORD_SUCCESS,
} from "./constants";

const initialState = {
  loading: false,
  success: false,
  error: false,
  messageError: "",
};

const forgotPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD_REQUEST:
      return {
        loading: true,
        success: false,
        error: false,
        messageError: "",
      };

    case FORGOT_PASSWORD_SUCCESS:
      return {
        loading: false,
        success: true,
        error: false,
        messageError: "",
      };
    case FORGOT_PASSWORD_ERROR:
      return {
        loading: false,
        success: false,
        error: true,
        messageError: "Send failed.",
      };
    case FORGOT_PASSWORD_RESET:
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

export default forgotPasswordReducer;

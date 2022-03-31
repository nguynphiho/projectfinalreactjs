import {
  CHANGE_PASSWORD_ERROR,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_RESET,
  CHANGE_PASSWORD_SUCCESS,
} from "./constants";

const initialState = {
  loading: false,
  success: false,
  error: false,
  messageError: "",
};

const changePasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PASSWORD_REQUEST:
      return {
        loading: true,
        success: false,
        error: false,
        messageError: "",
      };

    case CHANGE_PASSWORD_SUCCESS:
      return {
        loading: false,
        success: true,
        error: false,
        messageError: "",
      };
    case CHANGE_PASSWORD_ERROR:
      return {
        loading: false,
        success: false,
        error: true,
        messageError: "Send failed.",
      };
    case CHANGE_PASSWORD_RESET:
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

export default changePasswordReducer;

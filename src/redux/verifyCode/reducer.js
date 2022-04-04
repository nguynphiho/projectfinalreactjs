import {
  VERIFY_CODE_ERROR,
  VERIFY_CODE_REQUEST,
  VERIFY_CODE_RESET,
  VERIFY_CODE_SUCCESS,
} from "./constants";

const initialState = {
  loading: false,
  success: false,
  error: false,
  messageError: "",
};

const verifyCodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case VERIFY_CODE_REQUEST:
      return {
        loading: true,
        success: false,
        error: false,
        messageError: "",
      };

    case VERIFY_CODE_SUCCESS:
      return {
        loading: false,
        success: true,
        error: false,
        messageError: "",
      };
    case VERIFY_CODE_ERROR:
      return {
        loading: false,
        success: false,
        error: true,
        messageError: "Send failed.",
      };
    case VERIFY_CODE_RESET:
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

export default verifyCodeReducer;

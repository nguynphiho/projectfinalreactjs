import { FORGOT_PASSWORD_REQUEST } from "./constants";

const requestForgotPassword = (payload) => {
  return {
    type: FORGOT_PASSWORD_REQUEST,
    payload,
  };
};

export default requestForgotPassword;

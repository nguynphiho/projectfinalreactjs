import { CHANGE_PASSWORD_REQUEST } from "./constants";

const requestChangePassword = (payload) => {
  return {
    type: CHANGE_PASSWORD_REQUEST,
    payload,
  };
};

export default requestChangePassword;

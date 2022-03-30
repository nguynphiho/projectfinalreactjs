import { SIGNIN_REQUEST } from "./constants";

const requestSigin = (username, password, rememberMe) => {
  return {
    type: SIGNIN_REQUEST,
    username,
    password,
    rememberMe,
  };
};

export default requestSigin;

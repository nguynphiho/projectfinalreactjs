import { SIGNUP_REQUEST } from "./constants";

const requestSigup = (account) => {
  return {
    type: SIGNUP_REQUEST,
    account,
  };
};

export default requestSigup;

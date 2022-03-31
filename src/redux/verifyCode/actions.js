import { VERIFY_CODE_REQUEST } from "./constants";

const requestVerifyCode = (payload) => {
  return {
    type: VERIFY_CODE_REQUEST,
    payload,
  };
};

export default requestVerifyCode;

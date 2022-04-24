import { SIGNIN_REQUEST } from "./constants";

const requestSigin = (acount) => {
  return {
    type: SIGNIN_REQUEST,
    acount,
  };
};

export default requestSigin;

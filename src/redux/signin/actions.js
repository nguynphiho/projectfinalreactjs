import { SIGNIN_REQUEST } from "./constants";

const requestSigin = (username, password) => {
	return {
		type: SIGNIN_REQUEST,
		username,
		password,
	};
};

export default requestSigin;

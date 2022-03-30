import { call, put, takeLatest } from "redux-saga/effects";
import authenticationService from "../../services/authenticationService";
import { SIGNIN_ERROR, SIGNIN_REQUEST, SIGNIN_SUCCESS } from "./constants";
import { OK } from "../../constants";

function* signinFlow(action) {
	const { username, password } = action;
	const user = {
		username,
		password,
	};
	try {
		const data = yield call(authenticationService.login, user);
		console.log("Data:", JSON.stringify(data));
		if (data && data.status === OK) {
			yield put({
				type: SIGNIN_SUCCESS,
				payload: data,
			});
		} else {
			yield put({
				type: SIGNIN_ERROR,
			});
		}
	} catch (error) {
		console.log("Err:", JSON.stringify(error));
		yield put({
			type: SIGNIN_ERROR,
		});
	}
}

function* signinWatcher() {
	yield takeLatest(SIGNIN_REQUEST, signinFlow);
}

export default signinWatcher;

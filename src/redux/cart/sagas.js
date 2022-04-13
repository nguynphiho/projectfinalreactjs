import { call, takeLatest, put } from "redux-saga/effects";
import cartService from "../../services/cartService";
import { CART_REQUEST, CART_SUCCESS, CART_ERROR } from "./constaints";
import { OK } from "../../constants";

function* cartFlow() {
	try {
		const response = yield call(cartService.getCart);
		if (response && response.status === OK) {
			yield put({
				type: CART_SUCCESS,
				payload: response.data,
			});
		} else {
			yield put({
				type: CART_ERROR,
			});
		}
	} catch (error) {
		yield put({
			type: CART_ERROR,
		});
	}
}

function* cartWatcher() {
	yield takeLatest(CART_REQUEST, cartFlow);
}

export default cartWatcher;

import { call, put, takeLatest } from "redux-saga/effects";
import { addProduct, addProductError, addProductSuccess } from "./actions";
import productService from "services/productService";
import { OK } from "constants";

function* productAddFlow(action) {
  try {
    const response = yield call(
      productService.saveProduct,
      action.payload.product,
      action.payload.image
    );
    if (response && response.status === OK) {
      yield put(addProductSuccess(response.data));
    } else {
      yield put(addProductError("Error"));
    }
  } catch (error) {
    yield put(addProductError(error));
  }
}

export function* productAddWatcher() {
  yield takeLatest(addProduct().type, productAddFlow);
}

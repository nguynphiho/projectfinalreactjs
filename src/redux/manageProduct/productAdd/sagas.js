import { call, put, takeLatest } from "redux-saga/effects";
import { addProduct, addProductError, addProductSuccess } from "./actions";
import productService from "services/productService";
import { OK } from "constants";

function* productAddFlow({ payload }) {
  const { product, image } = payload;
  try {
    const response = yield call(productService.saveProduct, product, image);
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

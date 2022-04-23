import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
    fetchAllUserAsync,
    fetchAllUserSuccess,
    fetchAllUserError,
    deleteUser,
    saveUser,
    updateUser,
} from "./action";
import { userService } from "../../services/userService";
import { OK } from "../../constants";

function* handleFetchUser() {
    try{
      const response = userService.getUsers();
      if (response && response.status === OK) {
        yield put(fetchAllUserSuccess(response.data))
      } else {
        yield put(fetchAllUserSuccess("Error...."))
      }
    } catch(error) {
        yield put(fetchAllUserError(error))
    }
}

function* handleDeleteUser() {
  try{
    yield call(userService.deleteUser, deleteUser().payload)
  } catch(error) {
    yield put(fetchAllUserError("Error....!"))
  }
}

function* handleUpdateUser() {
  try{
    yield call(userService.updateUser, updateUser().payload)
  } catch(error) {
    yield put(fetchAllUserError("Error....!"))
  }
}

function* handleSaveUser() {
  yield console.log("save user")
  try{
    yield call(userService.saveUser, saveUser().payload)
  } catch(error) {
    yield console.log({error})
    yield put(fetchAllUserError("Error....!"))
  }
}

export function* userWatcher() {
    yield takeEvery(fetchAllUserAsync().type, handleFetchUser);
    yield takeLatest(deleteUser().type, handleDeleteUser);
    yield takeLatest(updateUser().type, handleUpdateUser)
    yield takeLatest(saveUser().type, handleSaveUser)
}
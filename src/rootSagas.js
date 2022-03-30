import { all } from 'redux-saga/effects';
import signinWatcher from 'redux/signin/sagas';

function* RootSagas() {
  yield all([
    signinWatcher(),
  ]);
};

export default RootSagas;

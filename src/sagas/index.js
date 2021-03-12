import { all } from 'redux-saga/effects';

import trackersSaga from './trackers';

export default function* rootSaga() {
  yield all([
    trackersSaga()
  ])
}

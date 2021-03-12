import { put, select, takeLatest } from 'redux-saga/effects';
import { GET_TRACKERS_DATA, setTrackersData, ADD_TRACKER, DELETE_TRACKER, STOP_TRACKER, START_TRACKER } from '../actions/trackers';
import { trackersDataSelector } from '../selectors';
import { saveToLocalStorage } from '../services';

export function* getTrackers() {
  let trackersData = yield JSON.parse(localStorage.getItem('trackersData'));
  if(!trackersData) trackersData = [];
  yield put(setTrackersData(trackersData));
}

export function* addTracker({ payload }) {
  const trackersData = yield select(trackersDataSelector)
  yield saveToLocalStorage(trackersData)
}

export function* deleteTracker({ payload }) {
  const trackersData = yield select(trackersDataSelector);
  yield saveToLocalStorage(trackersData)
}

export function* stopTracker({ payload }) {
  const trackersData = yield select(trackersDataSelector);
  yield saveToLocalStorage(trackersData)
}

export function* startTracker({ payload }) {
  const trackersData = yield select(trackersDataSelector);
  yield saveToLocalStorage(trackersData)
}

export default function* trackersWatcher () {
  yield takeLatest(GET_TRACKERS_DATA, getTrackers)
	yield takeLatest(ADD_TRACKER, addTracker)
	yield takeLatest(DELETE_TRACKER, deleteTracker)
	yield takeLatest(STOP_TRACKER, stopTracker)
	yield takeLatest(START_TRACKER, startTracker)
}

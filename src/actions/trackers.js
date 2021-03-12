export const SET_TRACKERS_DATA =  "SET_TRACKERS_DATA";
export const GET_TRACKERS_DATA = "GET_TRACKERS_DATA";

export const ADD_TRACKER = "ADD_TRACKER";
export const DELETE_TRACKER = "DELETE_TRACKER";
export const STOP_TRACKER = "STOP_TRACKER";
export const START_TRACKER = "START_TRACKER";

export const getTrackersData = () => ({
  type: GET_TRACKERS_DATA
})

export const setTrackersData = (trackersData) => ({
  type: SET_TRACKERS_DATA,
  payload: { trackersData }
})

export const addTracker = (tracker) => ({
  type: ADD_TRACKER,
  payload: { tracker }
})

export const deleteTracker = (trackerId) => ({
  type: DELETE_TRACKER,
  payload: { trackerId }
})

export const stopTracker = (trackerId, stopDate) => ({
  type: STOP_TRACKER,
  payload: { trackerId, stopDate }
})

export const startTracker = (trackerId, date) => ({
  type: START_TRACKER,
  payload: { trackerId, date }
})

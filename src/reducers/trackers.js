import { SET_TRACKERS_DATA, ADD_TRACKER, DELETE_TRACKER, STOP_TRACKER, START_TRACKER } from "../actions/trackers";

const initialState = {
	trackersData: [],
};

export default function trackersReducer (state = initialState, { payload, type }) {
	switch (type) {
		case SET_TRACKERS_DATA: 
			return {
				...state,
				trackersData: payload.trackersData,
			}

		case ADD_TRACKER: 
			return {
				...state,
				trackersData: [...state.trackersData, payload.tracker]
			}

		case DELETE_TRACKER: 
			return {
				...state,
				trackersData: state.trackersData
					.filter(t => t.id !== payload.trackerId)
			}

		case STOP_TRACKER: 
			return {
				...state,
				trackersData: state.trackersData.map(t => 
					t.id === payload.trackerId 
						? {...t, stopDate: payload.stopDate} 
						: t
				)
			}

		case START_TRACKER: 
			return {
				...state,
				trackersData: state.trackersData.map(t => 
					t.id === payload.trackerId 
						? {...t, date: payload.date, stopDate: null} 
						: t
				)
			}
		
		default:
			return state;
	}
}

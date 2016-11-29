import {
    LOCATIONS_FETCH_SUCCESS,
    UPDATE_CURRENT_STORE
} from '../actions/types';

const INITIAL_STATE = {
    locations: {},
    currentStore: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case LOCATIONS_FETCH_SUCCESS:
      return { ...state, locations:action.payload};
    case UPDATE_CURRENT_STORE:
      return { ...state, currentStore:action.payload};
    default:
      return state;
  }
};
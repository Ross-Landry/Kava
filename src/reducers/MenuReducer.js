import {
    MENU_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    menu: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MENU_FETCH_SUCCESS:
      return { ...state, menu:action.payload};
    default:
      return state;
  }
};
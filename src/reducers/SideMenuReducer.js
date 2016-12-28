import {
    TOGGLE_SIDE_MENU
} from '../actions/types';

const INITIAL_STATE = {
    showMenu: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_SIDE_MENU:
      const toggledVal = !state.showMenu;
      return { ...state, showMenu: toggledVal}
    default:
      return state;
  }
};
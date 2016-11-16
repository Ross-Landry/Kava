import {
  ADD_FAVORITE_START,
  ADD_FAVORITE_SUCCESS,
  FAVORITES_FETCH_SUCCESS,
  TOGGLE_FAVORITE_MODAL,
  UPDATE_FAVORITE_TITLE,
  RESET_FAVORITE_MODAL,
  SELECT_FAVORITE,
  REMOVE_FAVORITE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    favoriteItems: {},
    showModal: false,
    favoriteTitle: '',
    modalStage: 0,
    selectedFavorite: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case FAVORITES_FETCH_SUCCESS:
      return { ...state, favoriteItems:action.payload};
    case UPDATE_FAVORITE_TITLE:
      return { ...state, favoriteTitle:action.payload};
    case TOGGLE_FAVORITE_MODAL:
      const toggledModalBool = !state.showModal;
      return { ...state, showModal:toggledModalBool };
    case ADD_FAVORITE_START:
      return { ...state, modalStage:1};
    case ADD_FAVORITE_SUCCESS:
        return { ...state, modalStage:2};
    case REMOVE_FAVORITE_SUCCESS:
      return { ...state, modalStage:3};
    case RESET_FAVORITE_MODAL:
      return { ...state, modalStage:0, showModal:false, favoriteTitle: ''};
    case SELECT_FAVORITE:
      return { ...state, selectedFavorite:action.payload}
    default:
      return state;
  }
};

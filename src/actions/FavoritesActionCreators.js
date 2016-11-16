import firebase from 'firebase';
import {
    ADD_FAVORITE_START,
    ADD_FAVORITE_SUCCESS,
    FAVORITES_FETCH_SUCCESS,
    TOGGLE_FAVORITE_MODAL,
    UPDATE_FAVORITE_TITLE,
    RESET_FAVORITE_MODAL,
    SELECT_FAVORITE,
    REMOVE_FAVORITE_SUCCESS
} from './types';
import { Actions } from 'react-native-router-flux';

export const favoritesFetch = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/favorites`)
      .on('value', snapshot => {
          dispatch({ type:FAVORITES_FETCH_SUCCESS, payload:snapshot.val() });
      });
  };
};

export const toggleFavoriteModal = () => {
  return {
    type: TOGGLE_FAVORITE_MODAL
  };
};

export const updateFavoriteTitle = (title) => {
  return {
    type: UPDATE_FAVORITE_TITLE,
    payload: title
  };
};

export const addToFavorites = (item) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
      dispatch({ type: ADD_FAVORITE_START });
      firebase.database().ref(`/users/${currentUser.uid}/favorites`)
        .push(item)
        .then(() => addToFavoritesSuccess(dispatch));
    };
};

const addToFavoritesSuccess = (dispatch) => {
    dispatch({ type: ADD_FAVORITE_SUCCESS });
};

export const removeFavorite = (id) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
      firebase.database().ref(`/users/${currentUser.uid}/favorites/${id}`)
        .remove()
        .then(() => removeFavoriteSuccess(dispatch));
    };
};


const removeFavoriteSuccess = (dispatch) => {
    dispatch({ type: REMOVE_FAVORITE_SUCCESS });
};

export const resetFavoriteModal = () => {
  return {
    type: RESET_FAVORITE_MODAL
  };
};

export const selectFavorite = (item) => {
  return {
    type: SELECT_FAVORITE,
    payload: item
  };
};

export const addFavoriteToOrder = (item) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    dispatch({ type: ADD_FAVORITE_START });
    firebase.database().ref(`/users/${currentUser.uid}/currentOrder`)
      .push(item)
      .then(() => addToFavoritesSuccess(dispatch));
  };
};

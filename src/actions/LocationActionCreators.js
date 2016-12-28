import firebase from 'firebase';

import {
    LOCATIONS_FETCH_SUCCESS,
    UPDATE_CURRENT_STORE
} from './types';

export const locationsFetch = () => {
  return (dispatch) => {
    firebase.database().ref(`/locations`)
      .on('value', snapshot => {
          dispatch({ type:LOCATIONS_FETCH_SUCCESS, payload:snapshot.val() });
      });
  };
};

export const updateLocation = (location) => {
  return {
    type: UPDATE_CURRENT_STORE,
    payload: location
  };
};

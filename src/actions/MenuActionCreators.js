import firebase from 'firebase';

import {
    MENU_FETCH_SUCCESS
} from './types';

export const menuFetch = () => {
  return (dispatch) => {
    firebase.database().ref(`/menus`)
      .on('value', snapshot => {
          dispatch({ type:MENU_FETCH_SUCCESS, payload:snapshot.val() });
      });
  };
};

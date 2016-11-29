import firebase from 'firebase';
import {
    UPDATE_LOGIN_ENTRY,
    LOGIN_SUCCESS,
    LOGIN_START,
    CREATE_USER_START,
    AUTH_FAIL,
    NAVIGATE_IN_AUTH,
    LOGOUT_START,
    LOGOUT_SUCCESS,
    LOGOUT,
    UPDATE_ERROR_MESSAGE
} from './types';
import { Actions } from 'react-native-router-flux';

export const updateLoginEntry = ({ prop, value}) => {
  return {
    type: UPDATE_LOGIN_ENTRY,
    payload: { prop, value }
  };
};

export const loginUser = ({ email, password}) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_START });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch((error) => authFail(dispatch, error));
  }
};

export const logoutUser = () => {
  return (dispatch) => {
    dispatch({ type: LOGOUT_START });
      firebase.auth().signOut()
      .then( () => {
                      dispatch({ type: LOGOUT_SUCCESS });
                      Actions.auth();
                    } )
  }
};

export const createUser = ({ email, password}) => {
  return (dispatch) => {
    dispatch({ type: CREATE_USER_START });
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch((error) => authFail(dispatch, error));
  }
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_SUCCESS,
        payload: user
    });
    Actions.main();
};

const authFail = (dispatch, error) => {
    dispatch({
        type: AUTH_FAIL,
        payload: error.message
    });
};
export const navigateInAuth = () => {
    return {
        type: NAVIGATE_IN_AUTH
    };
};
export const updateError = (error) => {
    return {
        type: UPDATE_ERROR_MESSAGE,
        payload: error
    };
};

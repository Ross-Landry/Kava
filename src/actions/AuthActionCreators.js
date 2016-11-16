import firebase from 'firebase';
import {
    UPDATE_LOGIN_ENTRY,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGIN_START,
    CREATE_USER_START,
    CREATE_USER_FAIL,
    NAVIGATE_IN_AUTH,
    LOGOUT_START,
    LOGOUT_SUCCESS,
    LOGOUT
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
      .catch(() => loginUserFail(dispatch));
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
      .catch(() => createUserFail(dispatch));
  }
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_SUCCESS,
        payload: user
    });
    Actions.main();
};
const loginUserFail = (dispatch) => {
    dispatch({
        type: LOGIN_FAIL
    });

};
const createUserFail = (dispatch) => {
    dispatch({
        type: CREATE_USER_FAIL
    });
};
export const navigateInAuth = () => {
    return {
        type: NAVIGATE_IN_AUTH
    };
};

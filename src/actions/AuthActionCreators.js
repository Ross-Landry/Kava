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
    UPDATE_ERROR_MESSAGE,
    FETCH_NAME
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

export const createUser = ({ email, password, firstNameEntry, lastNameEntry }) => {
  return ( dispatch ) => {
    dispatch({ type: CREATE_USER_START });
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then( user => createUserSuccess(dispatch, user, firstNameEntry, lastNameEntry))
      .catch((error) => authFail(dispatch, error));
  }
};

const createUserSuccess = (dispatch, user, firstNameEntry, lastNameEntry) => {

    const uid = user.uid;
    const name = { first: firstNameEntry, last: lastNameEntry };
    //Add the the user's name to the database
    firebase.database().ref(`/users/${uid}/name`).set(name)
    //Add the 'user' object to redux store
    dispatch({
        type: LOGIN_SUCCESS,
        payload: { name, user } 
    })
    //Move to the main app
    Actions.main();
};

const loginUserSuccess = (dispatch, user) => {
    const uid = user.uid;
    firebase.database().ref(`/users/${uid}/name`)
    .on('value', snapshot => {
        dispatch({ 
          type:LOGIN_SUCCESS, 
          payload:{ name:snapshot.val(), user } 
        });
        Actions.main();
    });

};

const authFail = (dispatch, error) => {
    console.log(error);
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

export const fetchName = () => {
    return (dispatch) => {
        const custUID = firebase.auth().currentUser.uid;
        firebase.database().ref(`/users/${custUID}/name`)
          .on('value', snapshot => {
              dispatch({ 
                type:FETCH_NAME, 
                payload:{ name:snapshot.val() } 
              });
          });
    }
};
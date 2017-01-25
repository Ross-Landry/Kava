import firebase from 'firebase';
import {
    BALANCE_FETCH_SUCCESS,
    BALANCE_DEBIT_SUCCESS
} from './types';
import { Actions } from 'react-native-router-flux';

export const balanceFetch = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/balance`)
      .on('value', snapshot => {
          dispatch({ type:BALANCE_FETCH_SUCCESS, payload:snapshot.val() });
      });
  };
};

export const balanceDebit = (amount) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    const balanceRef = firebase.database().ref(`/users/${currentUser.uid}/balance`);
    balanceRef.on('value', snapshot => {
          const newBalance = snapshot.val() - amount;
          balanceRef.off('value');
          balanceRef.set(newBalance)
          .then(
            dispatch({ type:BALANCE_DEBIT_SUCCESS, payload: newBalance })
          )
      });
  };
};



import firebase from 'firebase';
import {
    ADD_TO_ORDER_START,
    ADD_TO_ORDER_SUCCESS,
    SELECT_ORDER_ITEM,
    REMOVE_CART_ITEM,
    ORDER_FETCH_SUCCESS,
    UPDATE_ORDER_PRICE
} from './types';
import { Actions } from 'react-native-router-flux';

export const addToOrder = (item) => {
    const currentUser = firebase.auth().currentUser;
    return (dispatch) => {
      dispatch({ type: ADD_TO_ORDER_START });
      firebase.database().ref(`/users/${currentUser.uid}/currentOrder`)
        .push(item)
        .then(() => addToOrderSuccess(dispatch));
    };
};

export const removeOrderItem = (id) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
      firebase.database().ref(`/users/${currentUser.uid}/currentOrder/${id}`)
        .remove()
        .then(() => removeFromOrderSuccess(dispatch));
    };
};

const addToOrderSuccess = (dispatch) => {
    dispatch({ type: ADD_TO_ORDER_SUCCESS });
    Actions.checkout();
};

const removeFromOrderSuccess = (dispatch) => {
    dispatch({ type: REMOVE_CART_ITEM });
};

export const orderFetch = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/currentOrder`)
      .on('value', snapshot => {
          dispatch({ type:ORDER_FETCH_SUCCESS, payload:snapshot.val() });
      });
  };
};

export const selectOrderItem = (id) => {
  return {
    type: SELECT_ORDER_ITEM,
    payload: id
  };
};

export const updateOrderPrice = (price) => {
  return {
    type: UPDATE_ORDER_PRICE,
    payload: price
  };
};


import {
  BALANCE_FETCH_SUCCESS,
  BALANCE_DEBIT_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    balance: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BALANCE_FETCH_SUCCESS:
      return {...state, balance: action.payload};
    case BALANCE_DEBIT_SUCCESS:
      return {...state, balance: action.payload}
    default:
      return state;
  }
};
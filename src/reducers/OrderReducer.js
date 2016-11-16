import {
  ADD_TO_ORDER_START,
  ADD_TO_ORDER_SUCCESS,
  ORDER_FETCH_SUCCESS,
  SELECT_ORDER_ITEM,
  REMOVE_CART_ITEM,
} from '../actions/types';

const INITIAL_STATE = {
    loading: false,
    orderItems: {},
    selectedItem: null,
    showModal: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_ORDER_START:
      return { ...state, loading: true}
    case ADD_TO_ORDER_SUCCESS:
      return { ...state, loading: false}
    case ORDER_FETCH_SUCCESS:
      return { ...state, orderItems:action.payload};
    case SELECT_ORDER_ITEM:
      return { ...state, selectedItem:action.payload};
    case REMOVE_CART_ITEM:
      return state;

    default:
      return state;
  }
};

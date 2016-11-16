import {
  SELECT_TEA_SIZE,
  SELECT_TEA_DECAF,
  SELECT_TEA_ICED,
  SELECT_TEA_CREAM,
  SELECT_TEA_SUGAR,
  SELECT_TEA_CREAM_QTY,
  SELECT_TEA_SUGAR_QTY,
  TOGGLE_TEA_BOOL,
  SELECT_TEA_FLAVOR,
  UPDATE_TEA_TITLE,
  UPDATE_TEA_DESCRIPTION,
  SELECT_ESPRESSO,
  UPDATE_TEA_PRICE
} from '../actions/types';

const INITIAL_STATE = {
    title:  '',
    decaf: '',
    decafBool: false,
    regularBool: false,
    size: '',
    sizePrice: null,
    smallBool: false,
    mediumBool: false,
    largeBool: false,
    iced: '',
    icedBool: false,
    hotBool: false,
    cream: 'Cream',
    sugar: 'Sugar',
    creamQty: 1,
    sugarQty: 1,
    flavor: '',
    description: '',
    price: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_TEA_TITLE:
      return { ...state, title:`${state.size} ${state.iced} Tea`};
    case UPDATE_TEA_DESCRIPTION:
      return {
        ...state,
        description: `${state.decaf} ${state.creamQty} ${state.cream} ${state.sugarQty} ${state.sugar}`};
    case TOGGLE_TEA_BOOL:
      return { ...state, [action.payload.prop]: action.payload.value };
    case SELECT_TEA_DECAF:
      return { ...state, decaf:action.payload};
    case SELECT_TEA_SIZE:
      return { ...state, size:action.payload.size, sizePrice:action.payload.price};
    case UPDATE_TEA_PRICE:
      const teaPrice = state.sizePrice;
      return { ...state, price: teaPrice };
    case SELECT_TEA_ICED:
      return { ...state, iced:action.payload};
    case SELECT_TEA_CREAM:
      return { ...state, cream:action.payload};
    case SELECT_TEA_SUGAR:
      return { ...state, sugar:action.payload};
    case SELECT_TEA_CREAM_QTY:
      return { ...state, creamQty:action.payload};
    case SELECT_TEA_SUGAR_QTY:
      return { ...state, sugarQty:action.payload};
    default:
      return state;
  }
};

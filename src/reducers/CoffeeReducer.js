import {
  SELECT_COFFEE_SIZE,
  SELECT_COFFEE_DECAF,
  SELECT_COFFEE_ICED,
  SELECT_COFFEE_CREAM,
  SELECT_COFFEE_SUGAR,
  SELECT_COFFEE_CREAM_QTY,
  SELECT_COFFEE_SUGAR_QTY,
  TOGGLE_COFFEE_BOOL,
  SELECT_COFFEE_FLAVOR,
  UPDATE_COFFEE_TITLE,
  UPDATE_COFFEE_DESCRIPTION,
  SELECT_ESPRESSO,
  UPDATE_COFFEE_PRICE
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
    espresso: '',
    espressoPrice: null,
    flavor: '',
    description: '',
    price: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_COFFEE_TITLE:
      return { ...state, title:`${state.size} ${state.iced} Coffee`};
    case UPDATE_COFFEE_DESCRIPTION:
      return {
        ...state,
        description: `${state.decaf} ${state.flavor} ${state.creamQty} ${state.cream} ${state.sugarQty} ${state.sugar} ${state.espresso}`};
    case TOGGLE_COFFEE_BOOL:
      return { ...state, [action.payload.prop]: action.payload.value };
    case SELECT_COFFEE_DECAF:
      return { ...state, decaf:action.payload};
    case SELECT_COFFEE_SIZE:
      return { ...state, size:action.payload.size, sizePrice:action.payload.price};
    case SELECT_ESPRESSO:
      return { ...state, espresso:action.payload.espresso, espressoPrice:action.payload.price};
    case UPDATE_COFFEE_PRICE:
      const coffeePrice = state.sizePrice + state.espressoPrice;
      return { ...state, price: coffeePrice };
    case SELECT_COFFEE_ICED:
      return { ...state, iced:action.payload};
    case SELECT_COFFEE_CREAM:
      return { ...state, cream:action.payload};
    case SELECT_COFFEE_SUGAR:
      return { ...state, sugar:action.payload};
    case SELECT_COFFEE_CREAM_QTY:
      return { ...state, creamQty:action.payload};
    case SELECT_COFFEE_SUGAR_QTY:
      return { ...state, sugarQty:action.payload};
    case SELECT_COFFEE_FLAVOR:
      return { ...state, flavor:action.payload};
    default:
      return state;
  }
};

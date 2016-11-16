import {
  SELECT_COFFEE_SIZE,
  SELECT_COFFEE_DECAF,
  SELECT_COFFEE_ICED,
  SELECT_COFFEE_CREAM,
  SELECT_COFFEE_SUGAR,
  SELECT_COFFEE_CREAM_QTY,
  SELECT_COFFEE_SUGAR_QTY,
  TOGGLE_COFFEE_BOOL,
  SELECT_FLAVOR,
  UPDATE_COFFEE_DESCRIPTION,
  UPDATE_COFFEE_TITLE,
  SELECT_ESPRESSO,
  SELECT_COFFEE_FLAVOR,
  UPDATE_COFFEE_PRICE
} from './types';

export const updateCoffeeDescription = () => {
  return {
    type: UPDATE_COFFEE_DESCRIPTION
  };
};

export const updateCoffeeTitle = () => {
  return {
    type: UPDATE_COFFEE_TITLE
  };
};

export const updateCoffeePrice = () => {
  return {
    type: UPDATE_COFFEE_PRICE
  };
};

export const toggleCoffeeBool = ({ prop, value}) => {
  return {
    type: TOGGLE_COFFEE_BOOL,
    payload: { prop, value }
  };
};

export const selectDecaf = (decaf) => {
  return {
    type: SELECT_COFFEE_DECAF,
    payload: decaf
  };
};

export const selectEspresso = ({ espresso, price }) => {
  return {
    type: SELECT_ESPRESSO,
    payload: { espresso, price }
  };
};

export const selectSize = ({ size, price }) => {
  return {
    type: SELECT_COFFEE_SIZE,
    payload: { size, price }
  };
};

export const selectIced = (iced) => {
  return {
    type: SELECT_COFFEE_ICED,
    payload: iced
  };
};

export const selectCream = (cream) => {
  return {
    type: SELECT_COFFEE_CREAM,
    payload: cream
  };
};

export const selectSugar = (sugar) => {
  return {
    type: SELECT_COFFEE_SUGAR,
    payload: sugar
  };
};

export const selectSugarQty = (sugarQty) => {
  return {
    type: SELECT_COFFEE_SUGAR_QTY,
    payload: sugarQty
  };
};

export const selectCreamQty = (creamQty) => {
  return {
    type: SELECT_COFFEE_CREAM_QTY,
    payload: creamQty
  };
};
export const selectFlavor = (flavor) => {
  return {
    type: SELECT_COFFEE_FLAVOR,
    payload: flavor
  };
};

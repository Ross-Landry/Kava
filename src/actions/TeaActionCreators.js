import {
  SELECT_TEA_SIZE,
  SELECT_TEA_DECAF,
  SELECT_TEA_ICED,
  SELECT_TEA_CREAM,
  SELECT_TEA_SUGAR,
  SELECT_TEA_CREAM_QTY,
  SELECT_TEA_SUGAR_QTY,
  TOGGLE_TEA_BOOL,
  SELECT_FLAVOR,
  UPDATE_TEA_DESCRIPTION,
  UPDATE_TEA_TITLE,
  SELECT_ESPRESSO,
  SELECT_TEA_FLAVOR,
  UPDATE_TEA_PRICE
} from './types';

export const updateTeaDescription = () => {
  return {
    type: UPDATE_TEA_DESCRIPTION
  };
};

export const updateTeaTitle = () => {
  return {
    type: UPDATE_TEA_TITLE
  };
};

export const updateTeaPrice = () => {
  return {
    type: UPDATE_TEA_PRICE
  };
};

export const toggleTeaBool = ({ prop, value}) => {
  return {
    type: TOGGLE_TEA_BOOL,
    payload: { prop, value }
  };
};

export const selectDecaf = (decaf) => {
  return {
    type: SELECT_TEA_DECAF,
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
    type: SELECT_TEA_SIZE,
    payload: { size, price }
  };
};

export const selectIced = (iced) => {
  return {
    type: SELECT_TEA_ICED,
    payload: iced
  };
};

export const selectCream = (cream) => {
  return {
    type: SELECT_TEA_CREAM,
    payload: cream
  };
};

export const selectSugar = (sugar) => {
  return {
    type: SELECT_TEA_SUGAR,
    payload: sugar
  };
};

export const selectSugarQty = (sugarQty) => {
  return {
    type: SELECT_TEA_SUGAR_QTY,
    payload: sugarQty
  };
};

export const selectCreamQty = (creamQty) => {
  return {
    type: SELECT_TEA_CREAM_QTY,
    payload: creamQty
  };
};
export const selectFlavor = (flavor) => {
  return {
    type: SELECT_TEA_FLAVOR,
    payload: flavor
  };
};

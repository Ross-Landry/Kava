import {
    MENU_FETCH_SUCCESS,
    STOCK_FETCH_SUCCESS,
    SELECT_STOCK_MENU,
    SELECT_STOCK_ITEM,
    FETCH_IMAGE_URL,
    IMAGE_OUTDATED

} from '../actions/types';

const INITIAL_STATE = {
    menu: {},
    stockItems: null,
    stockMenuType: '',
    stockMenuItem: {},
    menuImageURL: '../images/mountain.jpeg',
    newImage: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MENU_FETCH_SUCCESS:
      return { ...state, menu:action.payload};
    case STOCK_FETCH_SUCCESS:
      return { ...state, stockItems:action.payload};
    case SELECT_STOCK_MENU:
      return { ...state, stockMenuType:action.payload};
    case SELECT_STOCK_ITEM:
      return { ...state, stockMenuItem:action.payload};
    case FETCH_IMAGE_URL:
      return { ...state, menuImageURL:action.payload, newImage:true}
    case IMAGE_OUTDATED:
      return { ...state, newImage:false}
    default:
      return state;
  }
};
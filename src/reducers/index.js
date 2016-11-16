import { combineReducers } from 'redux';
import CoffeeReducer from './CoffeeReducer';
import TeaReducer from './TeaReducer';
import AuthReducer from './AuthReducer';
import OrderReducer from './OrderReducer';
import FavoritesReducer from './FavoritesReducer'


export default combineReducers({
    currentCoffee: CoffeeReducer,
    currentTea: TeaReducer,
    auth: AuthReducer,
    order: OrderReducer,
    favorites: FavoritesReducer
  });

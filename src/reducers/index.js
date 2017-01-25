import { combineReducers } from 'redux';
import CoffeeReducer from './CoffeeReducer';
import TeaReducer from './TeaReducer';
import AuthReducer from './AuthReducer';
import OrderReducer from './OrderReducer';
import FavoritesReducer from './FavoritesReducer';
import LocationReducer from './LocationReducer';
import MenuReducer from './MenuReducer';
import SideMenuReducer from './SideMenuReducer';
import BalanceReducer from './BalanceReducer';


export default combineReducers({
    currentCoffee: CoffeeReducer,
    currentTea: TeaReducer,
    auth: AuthReducer,
    order: OrderReducer,
    favorites: FavoritesReducer,
    location: LocationReducer,
    menu: MenuReducer,
    sideMenu: SideMenuReducer,
    balance: BalanceReducer 
  });

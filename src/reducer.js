import { combineReducers } from 'redux';
import home from './reducers/home';
import restaurant from './reducers/restaurant';
import restaurantList from './reducers/restaurantList';

export default combineReducers({
  home,
  restaurant,
  restaurantList,
});

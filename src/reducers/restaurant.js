import {
  RESTAURANT_PAGE_LOADED,
  RESTAURANT_PAGE_UNLOADED
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case RESTAURANT_PAGE_LOADED:
      return {
        ...state,
        restaurant: action.payload[0].restaurant
      };
    case RESTAURANT_PAGE_UNLOADED:
      return {};
    default:
      return state;
  }
}

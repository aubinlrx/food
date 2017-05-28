import {
  SET_PAGE,
  APPLY_TAG_FILTER,
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        restaurants: action.payload.restaurants,
        restaurantsCount: action.payload.restaurantsCount,
        currentPage: action.page
      };
    case APPLY_TAG_FILTER:
      return {
        ...state,
        pager: action.pager,
        restaurants: action.payload.restaurants,
        restaurantsCount: action.payload.restaurantsCount,
        tag: action.tag,
        currentPage: 0,
      };
    case HOME_PAGE_LOADED:
      return {
        ...state,
        pager: action.pager,
        tags: action.payload[0].tags,
        restaurants: action.payload[1].restaurants,
        restaurantsCount: action.payload[1].restaurantsCount,
        currentPage: 0
      };
    case HOME_PAGE_UNLOADED:
      return {};
    default:
      return state;
  }
}

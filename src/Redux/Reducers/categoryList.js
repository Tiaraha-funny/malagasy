import {CATEGORY_LIST} from '../../Constants';

export function categoryList(state = {}, action) {
  switch (action.type) {
    case CATEGORY_LIST:
      return {
        ...state,
        categoryList: action.payload,
        loading: !action.isLoading,
      };
    default:
      return state;
  }
}

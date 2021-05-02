import {GET_PHRASES} from '../../Constants';

export function phrases(state = {}, action) {
  switch (action.type) {
    case GET_PHRASES:
      return {
        ...state,
        categoryList: action.payload,
        isLoading: !action.isLoading,
      };
    default:
      return state;
  }
}

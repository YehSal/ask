import { FETCH_USER, CHOOSE_ROLE } from '../actions/types';

export default function(state=null, action) {
  switch(action.type) {
    case FETCH_USER:
      return action.payload || false;
    case CHOOSE_ROLE:
      return action.payload || false;
    default:
      return state;
  }
}

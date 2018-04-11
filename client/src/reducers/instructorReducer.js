import { FETCH_INSTRUCTOR } from '../actions/types';

export default function(state=false, action) {
  switch (action.type) {
    case FETCH_INSTRUCTOR:
      return action.payload || false;
    default:
      return state;
  }
}

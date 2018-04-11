import { FIND_COURSE, JOIN_COURSE } from '../actions/types';

export default function(state=null, action) {
  switch (action.type) {
    case FIND_COURSE:
      return action.payload;
    case JOIN_COURSE:
      return action.payload;
    default:
      return state;
  }
}

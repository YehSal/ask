import { FETCH_COURSES, FIND_COURSE } from '../actions/types';

export default function(state=[], action) {
  switch (action.type) {
    case FETCH_COURSES:
      return action.payload;
    case FIND_COURSE:
      return action.payload;
    default:
      return state;
  }
}

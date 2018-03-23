import { SUBMIT_QUESTION } from '../actions/types';

export default function(state=null, action) {
  switch (action.type) {
    case SUBMIT_QUESTION:
      return action.payload;
    default:
      return state;
  }
}

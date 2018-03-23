import { CAST_UPVOTE, CAST_DOWNVOTE } from '../actions/types';

export default function(state=null, action) {
  switch (action.type) {
    case CAST_UPVOTE:
      return action.payload || null;
    case CAST_DOWNVOTE:
      return action.payload || null;
    default:
      return state;
  }
}

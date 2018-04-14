import {
  FIND_COURSE,
  JOIN_COURSE,
  FETCH_QUESTIONS,
  SUBMIT_QUESTION,
  CAST_UPVOTE,
  CAST_DOWNVOTE
} from '../actions/types';

export default function(state=null, action) {
  switch (action.type) {
    case FIND_COURSE:
      return action.payload;
    case JOIN_COURSE:
      return action.payload;
    case FETCH_QUESTIONS:
      return action.payload;
    case SUBMIT_QUESTION:
      return action.payload;
    case CAST_UPVOTE:
      return action.payload;
    case CAST_DOWNVOTE:
      return action.payload;
    default:
      return state;
  }
}

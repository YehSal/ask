import {
  FIND_COURSE,
  JOIN_COURSE,
  FETCH_QUESTIONS,
  SUBMIT_QUESTION,
  EDIT_QUESTION,
  CAST_UPVOTE,
  CAST_DOWNVOTE,
  DELETE_QUESTION
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
    case DELETE_QUESTION:
      return action.payload;
    case EDIT_QUESTION:
      return action.payload;
    default:
      return state;
  }
}

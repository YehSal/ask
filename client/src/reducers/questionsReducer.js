import {
  FETCH_QUESTIONS,
  SUBMIT_QUESTION, 
  CAST_UPVOTE,
  CAST_DOWNVOTE
} from '../actions/types';

export default function(state=[], action) {
  switch (action.type) {
    case FETCH_QUESTIONS:
      return action.payload || null;
    case SUBMIT_QUESTION:
      return [...state, action.payload] || null;
    case CAST_UPVOTE:
      return action.payload || null;
    case CAST_DOWNVOTE:
      return action.payload || null;
    default:
      return state;
  }
}

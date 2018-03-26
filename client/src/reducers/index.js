import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import coursesReducer from './coursesReducer';
import findCourseReducer from './findCourseReducer';
import submitQuestionReducer from './submitQuestionReducer';
import fetchQuestionsReducer from './fetchQuestionsReducer';
import castVoteReducer from './castVoteReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  courses: coursesReducer,
  course: findCourseReducer,
  question: submitQuestionReducer,
  questions: fetchQuestionsReducer,
  courseAfterVote: castVoteReducer,
});

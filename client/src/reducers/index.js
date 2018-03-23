import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import coursesReducer from './coursesReducer';
import findCourseReducer from './findCourseReducer';
import fetchQuestionReducer from './fetchQuestionReducer';
import fetchQuestionsReducer from './fetchQuestionsReducer';
import castVoteReducer from './castVoteReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  courses: coursesReducer,
  course: findCourseReducer,
  question: fetchQuestionReducer,
  questions: fetchQuestionsReducer,
  votes: castVoteReducer
});

import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import coursesReducer from './coursesReducer';
import findCourseReducer from './findCourseReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  courses: coursesReducer,
  course: findCourseReducer,
});

import axios from 'axios';
import { FETCH_USER, FETCH_COURSES, FIND_COURSE } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const createCourse = (values, history) => async dispatch => {
  const res = await axios.post('/api/courses', values);
  const courseID = res.data._id;

  history.push(`/course/${courseID}`);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchCourses = () => async dispatch => {
  const res = await axios.get('/api/courses');

  dispatch({ type: FETCH_COURSES, payload: res.data });
};

export const findCourse = id => async dispatch => {
  const res = await axios.get(`/api/course/${id}`);
  console.log('here');
  dispatch({ type: FIND_COURSE, payload: res.data });
};

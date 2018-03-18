import axios from 'axios';
import { FETCH_USER, FETCH_COURSES } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const createCourse = (values, history) => async dispatch => {
  const res = await axios.post('/api/courses', values);

  history.push('/courses');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchCourses = () => async dispatch => {
  const res = await axios.get('/api/courses');

  dispatch({ type: FETCH_COURSES, payload: res.data });
};

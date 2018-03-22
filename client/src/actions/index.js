import axios from 'axios';
import { FETCH_USER, FETCH_COURSES, FIND_COURSE, SUBMIT_QUESTION, FETCH_QUESTIONS } from './types';

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
  const res = await axios.get(`/api/course/${id}`, {
    params: { id: id }
  });

  dispatch({ type: FIND_COURSE, payload: res.data });
};

//TODO: CourseID pass in using string interpolation
export const submitQuestion = (values, courseID, fetchQuestions) => async dispatch => {
  const res = await axios.post(`/api/course/${courseID}/questions`, {
    params: {
      values
    }
  });

  fetchQuestions(courseID);
  dispatch({ type: SUBMIT_QUESTION, payload: res.data });
};

export const fetchQuestions = courseID => async dispatch => {
  const res = await axios.get(`/api/course/${courseID}`, {
    params: { courseID }
  });

  dispatch({ type: FETCH_QUESTIONS, payload: res.data.questions });
}

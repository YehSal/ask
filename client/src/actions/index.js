import axios from 'axios';
import {
  FETCH_USER,
  FETCH_COURSES,
  FIND_COURSE,
  SUBMIT_QUESTION,
  DELETE_QUESTION,
  EDIT_QUESTION,
  FETCH_QUESTIONS,
  CAST_UPVOTE,
  CAST_DOWNVOTE,
  CHOOSE_ROLE,
  JOIN_COURSE
} from './types';

/*
 * AUTH ACTIONS
 */
 export const fetchUser = () => async dispatch => {
   const res = await axios.get('/api/current_user');

   dispatch({ type: FETCH_USER, payload: res.data });
 };

 export const chooseRole = values => async dispatch => {
   const res = await axios.post(`/api/current_user/role/${values.userRole}`);

   dispatch({ type: CHOOSE_ROLE, payload: res.data });
 }

/*
* COURSE ACTIONS
*/
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

export const joinCourse = (values, history) => async dispatch => {
  const res = await axios.get(`/api/course/joinCourse/${values.coursePassword}`);
  const courseID = res.data._id;

  history.push({
    pathname: `/course/${courseID}`,
    state: { courseID }
  });

  dispatch({ type: JOIN_COURSE, payload: res.data });
}

/*
 * QUESTIONS ACTIONS
 */
//TODO: CourseID pass in using string interpolation
export const submitQuestion = (values, courseID, fetchQuestions) => async dispatch => {
  const res = await axios.post(`/api/course/${courseID}/questions`, {
    params: {
      values
    }
  });

  dispatch({ type: SUBMIT_QUESTION, payload: res.data });
};

export const fetchQuestions = courseID => async dispatch => {
  const res = await axios.get(`/api/course/${courseID}`, {
    params: { courseID }
  });

  dispatch({ type: FETCH_QUESTIONS, payload: res.data });
};

export const deleteQuestion = (courseID, questionID) => async dispatch => {
  const res = await axios.delete(`/api/course/${courseID}/question/${questionID}`);

  dispatch({ type: DELETE_QUESTION, payload: res.data });
};

export const editQuestion = (courseID, questionID, values) => async dispatch => {
  const res = await axios.put(`/api/course/${courseID}/question/${questionID}`, {
    params: {
      values
    }
  });

  dispatch({ type: EDIT_QUESTION, payload: res.data });
};

export const castUpVote = (courseID, questionID) => async dispatch => {
  const res = await axios.post(`/api/course/${courseID}/question/${questionID}/upVote`);

  dispatch({ type: CAST_UPVOTE, payload: res.data });
};

export const castDownVote = (courseID, questionID) => async dispatch => {
  const res = await axios.post(`/api/course/${courseID}/question/${questionID}/downVote`);

  dispatch({ type: CAST_DOWNVOTE, payload: res.data });
};

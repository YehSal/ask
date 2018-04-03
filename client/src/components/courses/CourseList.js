import React from 'react';
import { Link } from 'react-router-dom';

const CourseList = ({ courses }) => {
  return courses.map(course => {
    return (
      <div key={course._id}>
        <Link to={{
          pathname: `/course/{course._id}`,
          state: { courseID: course._id }
        }}>
          <h5>{course.title}</h5>
        </Link>
      </div>
    );
  });
}

export default CourseList;

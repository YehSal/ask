import React from 'react';
import QuestionList from '../questions/QuestionList';

const Course = ({ course, renderPassword }) => {
  return (
    <div>
      <h3>Course Title: {course.title}</h3>
      {renderPassword()}
      <QuestionList questions={course.questions} course={course} />
    </div>
  );
}

export default Course;

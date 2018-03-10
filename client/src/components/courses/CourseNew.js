// CourseNew shows CourseForm and CourseFormReview (wizard form)
import React, { Component } from 'react';
import CourseForm from './CourseForm';

class CourseNew extends Component {
  render() {
    return(
      <div>
        <CourseForm />
      </div>
    );
  }
}

export default CourseNew;

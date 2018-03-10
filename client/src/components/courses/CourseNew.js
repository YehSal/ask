// CourseNew shows CourseForm and CourseFormReview (wizard form)
import React, { Component } from 'react';
import CourseForm from './CourseForm';
import CourseFormReview from './CourseFormReview';

class CourseNew extends Component {
  constructor(props) {
    super(props);

    this.state = { showFormReview: false };
  }

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <CourseFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }

    return (
      <CourseForm
        onCourseSubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return(
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default CourseNew;

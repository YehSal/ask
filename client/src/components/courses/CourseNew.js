// CourseNew shows CourseForm and CourseFormReview (wizard form)
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
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

/*
 * We are tying this component to the same form but we are not specifying the
 * option to not destroy the values when the component is unmounted. Since
 * CourseNew component is always mounted in the process of showing the form or
 * the review, we will dump all the values the moment we navigate to any other
 * route, which is the behavior we want
 */
export default reduxForm({
  form: 'courseForm'
})(CourseNew);

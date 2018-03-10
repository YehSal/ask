// CourseForm shows a form for a user to add input
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import CourseField from './CourseField';


/*
 * TODO: Add a field to pick the hours and minutes for the course duration
 */
class CourseForm extends Component {
  renderFields() {
    return(
      <div>
        <Field
          label="Course Title"
          type="text"
          name="courseTitle"
          component={CourseField}
        />
      </div>
    );
  }

  render() {
    return(
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'courseForm'
})(CourseForm);

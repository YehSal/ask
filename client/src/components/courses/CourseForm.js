/*
 * CourseForm shows a form for the user to add input
 */
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import CourseField from './CourseField';
import RaisedButton from 'material-ui/RaisedButton';
import Done from 'material-ui/svg-icons/action/done';
import Close from 'material-ui/svg-icons/navigation/close';
import { Link } from 'react-router-dom';
import { nextBtnStyles, cancelBtnStyles } from '../../styles/courses/course_form';


// TODO: Add a field to pick the hours and minutes for the course duration
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
        <form onSubmit={this.props.handleSubmit(this.props.onCourseSubmit)}>
          {this.renderFields()}
          <Link to="/courses">
            <RaisedButton
              label="Cancel"
              labelPosition="before"
              secondary={true}
              icon={<Close />}
              style={cancelBtnStyles.button}
            />
          </Link>
          <RaisedButton
            label="Next"
            labelPosition="before"
            primary={true}
            icon={<Done />}
            type='submit'
            style={nextBtnStyles.button}
          />
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.courseTitle) {
    errors.courseTitle = 'You must provide a course title';
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'courseForm',
  destroyOnUnmount: false
})(CourseForm);

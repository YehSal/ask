/*
 * CourseForm shows the form the user uses to create a course
 */
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import CourseField from './CourseField';
import RaisedButton from 'material-ui/RaisedButton';
import Done from 'material-ui/svg-icons/action/done';
import Close from 'material-ui/svg-icons/navigation/close';
import { Link } from 'react-router-dom';
import { nextBtnStyles, cancelBtnStyles } from '../../styles/courses/course_form';

const renderFields = () => {
    return (
      <div>
        <Field
          label="Course Title"
          type="text"
          name="courseTitle"
          hintText="e.g. CPSC 474"
          component={CourseField}
        />
        <Field
          label="Course Duration"
          type="text"
          name="courseDuration"
          hintText="HH:MM"
          component={CourseField}
        />
      </div>
    );
  }

const renderButtons = () => {
  return (
    <div>
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
    </div>
  );
}

const CourseForm = ({ handleSubmit, onCourseSubmit, ...props }) => {
  return(
    <div>
      <form onSubmit={handleSubmit(onCourseSubmit)}>
        {renderFields()}
        {renderButtons()}
      </form>
    </div>
  );
}

function validate(values) {
  const errors = {};
  const durationFormat = /^([0-1]\d|2[0-3]):([0-5]\d)$/g;

  if (!values.courseTitle) {
    errors.courseTitle = 'You must provide a course title';
  }

  if (!durationFormat.test(values.courseDuration)) {
    errors.courseDuration = 'Please follow the "hh:mm" format';
  }

  if (!values.courseDuration) {
    errors.courseDuration = 'You must provide a course duration';
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'courseForm',
  destroyOnUnmount: false
})(CourseForm);

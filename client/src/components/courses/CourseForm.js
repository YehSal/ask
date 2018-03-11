// CourseForm shows a form for a user to add input
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import CourseField from './CourseField';
import RaisedButton from 'material-ui/RaisedButton';
import Done from 'material-ui/svg-icons/action/done';
import Close from 'material-ui/svg-icons/navigation/close';
import FontIcon from 'material-ui/FontIcon';
import { Link } from 'react-router-dom';

/*
 * TODO: Add a field to pick the hours and minutes for the course duration
 */
const nextBtnStyles = {
  button: {
    margin: 12,
    float: 'right'
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};

const cancelBtnStyles = {
  button: {
    margin: 12,
    float: 'left'
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};


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

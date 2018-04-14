import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import CourseField from './CourseField';
import RaisedButton from 'material-ui/RaisedButton';
import Done from 'material-ui/svg-icons/action/done';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { joinCourse } from '../../actions';

class CourseJoin extends Component {
  constructor(props) {
    super(props);

    this.submitHandler = this.submitHandler.bind(this);
  }

  renderFields() {
    return (
      <div>
        <Field
          label="Course Password"
          type="text"
          name="coursePassword"
          component={CourseField}
        />
      </div>
    );
  }

  submitHandler() {
    this.props.joinCourse(this.props.formValues, this.props.history);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.submitHandler)}>
        {this.renderFields()}
        <RaisedButton
          label="Join Course"
          labelPosition="before"
          primary={true}
          icon={<Done />}
          type='submit'
        />
      </form>
    );
  }
}


function validate(values) {
  const errors = {};

  return errors;
}

function mapStateToProps(state) {
  return { formValues: state.form.joinCourseForm ? state.form.joinCourseForm.values : false };
}

export default compose(connect(mapStateToProps, { joinCourse }), withRouter, reduxForm({validate, form: 'joinCourseForm'}))(CourseJoin);

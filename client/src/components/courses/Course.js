/*
 * Course is the component responsible for showing the current course session.
 * It has the text box for students to ask and rate questions.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { findCourse, submitQuestion, fetchQuestions, castUpVote, castDownVote } from '../../actions';
import QuestionField from '../questions/QuestionField';
import QuestionList from '../questions/QuestionList';
import Done from 'material-ui/svg-icons/action/done';
import RaisedButton from 'material-ui/RaisedButton';


class Course extends Component {
  constructor(props) {
    super(props);

    this.state = { showPassword: true };
    this.submitHandler = this.submitHandler.bind(this);
  }

  componentDidMount() {
    // Depends on whether the user was redirected after creating a new course
    // or the user clicked a link in the dashboard or somewhere else in the app
    const courseID = this.props.location.state ? this.props.location.state.courseID : this.props.match.params.id
    this.props.findCourse(courseID);
    this.props.fetchQuestions(courseID);
  }

  renderPassword() {
    if (this.state.showPassword) {
      return (
        <div>
          <h3>Password: {this.props.course.password}</h3>
          <button onClick={() => this.setState({ showPassword: false })}>
            Hide Password
          </button>
        </div>
      );
    }

    return (
      <div>
        <button onClick={() => this.setState({ showPassword: true })}>
          Show Password
        </button>
      </div>
    );
  }

  renderCourse() {
    var course = this.props.question || this.props.course;

    if (course) {
      return (
        <div>
          <h3>Course Title: {course.title}</h3>
          {this.renderPassword()}
          <QuestionList
            questions={course.questions}
            course={course}
          />
        </div>
      );
    }

    return (
      <div><h1>Loader</h1></div>
    );
  }

  renderFields() {
    return(
      <div>
        <Field
          label="Question Body"
          type="text"
          name="questionBody"
          component={QuestionField}
        />
      </div>
    );
  }

  submitHandler() {
    this.props.submitQuestion(
      this.props.formValues,
      this.props.course._id,
      this.props.fetchQuestions
    );
  }
  render() {
    return(
      <div>
        {this.renderCourse()}
        <form onSubmit={this.props.handleSubmit(this.submitHandler)}>
          {this.renderFields()}
          <RaisedButton
            label="Submit Question"
            labelPosition="before"
            primary={true}
            icon={<Done />}
            type='submit'
          />
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    course: state.course,
    question: state.question,
    formValues: state.form.questionForm ? state.form.questionForm.values : false,
    questions: state.questions
  };
}

export default reduxForm({
  form: 'questionForm',
  destroyOnUnmount: false
})(connect(mapStateToProps, { findCourse, submitQuestion, fetchQuestions, castUpVote, castDownVote })(Course))

/*
 * Course is the component responsible for showing the current course session.
 * It has the text box for students to ask and rate questions.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { findCourse, submitQuestion } from '../../actions';
import QuestionField from '../questions/QuestionField';
import Done from 'material-ui/svg-icons/action/done';
import RaisedButton from 'material-ui/RaisedButton';


class Course extends Component {
  constructor(props) {
    super(props);

    this.state = { showPassword: true };
    // this.submitQuestion = this.submitQuestion.bind(this);
  }

  componentDidMount() {
    const courseID = this.props.history.location.state.courseID;
    this.props.findCourse(courseID);
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

  renderQuestions() {
    return this.props.course.questions.map(question => {
      return (
        <div key={question._id}>
          <h5>{question.body}</h5>
        </div>
      );
    });
  }

  renderCourse() {
    if (this.props.course) {
      return (
        <div>
          <h3>Course Title: {this.props.course.title}</h3>
          {this.renderPassword()}
          {this.renderQuestions()}
        </div>
      );
    }

    return (
      <div>
        <h1>Loader</h1>
      </div>
    )
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

  render() {
    return(
      <div>
        {this.renderCourse()}
        <form onSubmit={this.props.handleSubmit(() => this.props.submitQuestion(this.props.formValues, this.props.course._id))}>
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
    formValues: state.form.questionForm ? state.form.questionForm.values : false
  };
}

export default reduxForm({
  form: 'questionForm',
  destroyOnUnmount: false
})(connect(mapStateToProps, { findCourse, submitQuestion })(Course))

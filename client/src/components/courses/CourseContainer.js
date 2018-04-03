/*
 * Course is the component responsible for showing the current course session.
 * It has the text box for students to ask and rate questions.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findCourse, fetchQuestions, fetchUser } from '../../actions';
import Loader from '../Loader';
import Course from './Course';
import QuestionForm from '../questions/QuestionForm';
import QuestionList from '../questions/QuestionList';

class CourseContainer extends Component {
  // CourseID Depends on whether the user was redirected after creating a new
  // course or the user clicked a link in the dashboard or somewhere else in the app
  componentDidMount() {
    const courseID = this.props.location.state ? this.props.location.state.courseID : this.props.match.params.id
    this.props.findCourse(courseID);
    this.props.fetchQuestions(courseID);
    this.props.fetchUser();
  }

  renderContents() {
    var course = this.props.question || this.props.course;

    if (course) {
      return (
        <div>
          <Course course={course} renderPassword={this.renderPassword} />
          <QuestionList questions={course.questions} course={course} user={this.props.user} />
        </div>
      );
    }

    return <Loader />;
  }

  render() {
    return(
      <div>
        {this.renderContents()}
        <QuestionForm />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth,
    course: state.course,
    question: state.question,
    questions: state.questions
  };
}

export default connect(mapStateToProps, { findCourse, fetchQuestions, fetchUser })(CourseContainer);

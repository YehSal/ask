/*
 * CourseContainer passes data to Course and QuestionListContainer
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findCourse, fetchUser } from '../../actions';
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
    this.props.fetchUser();
  }

  renderContents() {
    if (this.props.course) {
      console.log('Course Container: ', this.props.course);
      return (
        <div>
          <Course
            course={this.props.course}
            renderPassword={this.renderPassword}
          />
          <QuestionList
            course={this.props.course}
            user={this.props.user}
          />
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
  };
}

export default connect(mapStateToProps, {
  findCourse,
  fetchUser
})(CourseContainer);

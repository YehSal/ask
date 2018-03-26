/*
 * QuestionList displays all the questions for the current course and allows
 * the user to upvote or downvote
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions';
import Question from './Question';

class QuestionList extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  renderQuestions() {
    // Original course or after being updated by votes
    var course = this.props.courseAfterVote || this.props.course;

    return course.questions.map(question => {
      return (
        <div key={question._id}>
          <Question question={question} course={course} user={this.props.user} />
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderQuestions()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    courseAfterVote: state.courseAfterVote,
    user: state.auth
  };
}

export default connect(mapStateToProps, { fetchUser })(QuestionList);

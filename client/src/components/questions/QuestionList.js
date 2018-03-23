import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { castUpVote, castDownVote } from '../../actions';

class QuestionList extends Component {
  // Original course or after being updated by votes
  renderQuestions() {
    var course = this.props.courseAfterVote || this.props.course;

    return course.questions.map(question => {
      return (
        <div key={question._id}>
          <h5>{question.body}</h5>
          <h6>{question.upVote}</h6>
          <h6>{question.downVote}</h6>
          <button
            onClick={() => {this.props.castUpVote(course._id, question._id)}}
          >
            Upvote
          </button>
          <button
            onClick={() => {this.props.castDownVote(course._id, question._id)}}
          >
            Downvote
          </button>
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
  return { courseAfterVote: state.courseAfterVote };
}

export default connect(mapStateToProps, { castUpVote, castDownVote })(QuestionList);

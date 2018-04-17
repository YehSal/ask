/*
 * QuestionList displays all the questions for the current course and allows
 * the user to upvote or downvote
 */
import React, { Component } from 'react';
import Question from './Question';
import * as _ from 'lodash';

class QuestionList extends Component {
  renderQuestions() {
    var questions = this.props.course.questions;

    questions = _.orderBy(questions, ['upVote', 'downVote'], ['desc', 'asc']);

    return questions.map(question => {
      return (
        <div key={question._id}>
          <Question question={question} course={this.props.course} user={this.props.user} />
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h3 style={{display:'block', width:'100%', textAlign:'center'}}>Questions</h3>
        {this.renderQuestions()}
      </div>
    );
  }
}

export default QuestionList;

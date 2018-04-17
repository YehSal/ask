import React, { Component } from 'react';
import { connect } from 'react-redux';
import { castUpVote, castDownVote, deleteQuestion } from '../../actions';
import * as _ from 'lodash';
import RaisedButton from 'material-ui/RaisedButton';
import { List, ListItem } from 'material-ui/List';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ThumbDown from 'material-ui/svg-icons/action/thumb-down';
import Divider from 'material-ui/Divider';
import { ButtonStyle, ListStyle } from '../../styles/base';
import '../../styles/index.css';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Clear from 'material-ui/svg-icons/content/clear';
import Edit from 'material-ui/svg-icons/content/create';

class Question extends Component {
  checkUserUpVoted() {
    return(_.includes(this.props.question.usersUpVoted, this.props.user._id));
  }

  checkUserDownVoted() {
    return(_.includes(this.props.question.usersDownVoted, this.props.user._id));
  }

  renderVotingButtons() {
    return(
      <div>
        <RaisedButton
          primary={true}
          labelPosition="before"
          label={this.props.question.upVote.toString()}
          labelStyle={ButtonStyle.upVoteStyle}
          icon={<ThumbUp />}
          onClick={() => {this.props.castUpVote(this.props.course._id, this.props.question._id)}}
          disabled={this.checkUserUpVoted()}
          className={'question-upvote-btn'}
        >
        </RaisedButton>
        <RaisedButton
          secondary={true}
          labelPosition="before"
          label={this.props.question.downVote.toString()}
          labelStyle={ButtonStyle.downVoteStyle}
          icon={<ThumbDown />}
          onClick={() => {this.props.castDownVote(this.props.course._id, this.props.question._id)}}
          disabled={this.checkUserDownVoted()}
          className={'question-downvote-btn'}
        >
        </RaisedButton>

      </div>
    );
  }

  render() {
    return (
      <div className="question-container">
        <div className="question-item">
          {this.props.question.body}
        </div>
        <div className="question-upvote-btn">
          <RaisedButton
            primary={true}
            labelPosition="before"
            label={this.props.question.upVote.toString()}
            labelStyle={ButtonStyle.upVoteStyle}
            icon={<ThumbUp />}
            onClick={() => {this.props.castUpVote(this.props.course._id, this.props.question._id)}}
            disabled={this.checkUserUpVoted()}
          />
        </div>
        <div className="question-downvote-btn">
          <RaisedButton
            secondary={true}
            labelPosition="before"
            label={this.props.question.downVote.toString()}
            labelStyle={ButtonStyle.downVoteStyle}
            icon={<ThumbDown />}
            onClick={() => {this.props.castDownVote(this.props.course._id, this.props.question._id)}}
            disabled={this.checkUserDownVoted()}
          >
          </RaisedButton>
        </div>
        <div className="question-delete-btn">
          <FloatingActionButton
            mini={true}
            secondary={true}
            onClick={() => this.props.deleteQuestion(this.props.course._id, this.props.question._id)}
          >
            <Clear />
          </FloatingActionButton>
        </div>
        <div className="question-edit-btn">
          <FloatingActionButton mini={true}>
            <Edit />
          </FloatingActionButton>
        </div>
      </div>
    );
  }
}

export default connect(null, { castUpVote, castDownVote, deleteQuestion })(Question);

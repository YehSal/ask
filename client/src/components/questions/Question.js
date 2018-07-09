import React, { Component } from 'react';
import { connect } from 'react-redux';
import { castUpVote, castDownVote, deleteQuestion, editQuestion } from '../../actions';
import * as _ from 'lodash';
import RaisedButton from 'material-ui/RaisedButton';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ThumbDown from 'material-ui/svg-icons/action/thumb-down';
import Dialog from 'material-ui/Dialog';
import { ButtonStyle } from '../../styles/base';
// import '../../styles/index.css';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Clear from 'material-ui/svg-icons/content/clear';
import Edit from 'material-ui/svg-icons/content/create';
import QuestionEditForm from './QuestionEditForm';

class Question extends Component {
  constructor(props) {
    super(props);

    this.state = { open: false }
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({open: true});
  };

  handleClose() {
    this.setState({open: false});
  };

  checkUserUpVoted() {
    return _.includes(this.props.question.usersUpVoted, this.props.user._id);
  }

  checkUserDownVoted() {
    return _.includes(this.props.question.usersDownVoted, this.props.user._id);
  }

  handleDisableEditDelete() {
    if (this.props.user.role === 2 && this.props.question._user !== this.props.user._id)
      return true;

    return false;
  }

  renderDelete() {
    if (this.props.user.role == 1 || (this.props.user.role == 2 && !this.props.course.sentQuestions)) {
      return (
        <div className="question-delete-btn">
          <FloatingActionButton
            mini={true}
            secondary={true}
            onClick={() => this.props.deleteQuestion(this.props.course._id, this.props.question._id)}
            disabled={this.handleDisableEditDelete()}
          >
            <Clear />
          </FloatingActionButton>
        </div>
      );
    }
  }

  renderEdit() {
    if (this.props.user.role == 1 || (this.props.user.role == 2 && !this.props.course.sentQuestions)) {
      return (
        <div className="question-edit-btn">
          <FloatingActionButton
            mini={true}
            onClick={this.handleOpen}
            disabled={this.handleDisableEditDelete()}
          >
            <Edit />
          </FloatingActionButton>
          <Dialog
            title="Edit Question"
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >
            <QuestionEditForm question={this.props.question} course={this.props.course} open={this.state.open}/>
          </Dialog>
        </div>
      )
    }
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
        {this.renderDelete()}
        {this.renderEdit()}
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    course: state.course,
    formValues: state.form.questionEditForm ? state.form.questionEditForm.values : false
  };
}

export default connect(mapStateToProps, { castUpVote, castDownVote, deleteQuestion, editQuestion })(Question);

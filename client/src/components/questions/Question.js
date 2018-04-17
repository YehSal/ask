import React, { Component } from 'react';
import { connect } from 'react-redux';
import { castUpVote, castDownVote, deleteQuestion, editQuestion } from '../../actions';
import * as _ from 'lodash';
import RaisedButton from 'material-ui/RaisedButton';
import { List, ListItem } from 'material-ui/List';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ThumbDown from 'material-ui/svg-icons/action/thumb-down';
import Divider from 'material-ui/Divider';
import Dialog from 'material-ui/Dialog';
import { ButtonStyle, ListStyle } from '../../styles/base';
import '../../styles/index.css';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FlatButton from 'material-ui/FlatButton';
import Clear from 'material-ui/svg-icons/content/clear';
import Edit from 'material-ui/svg-icons/content/create';
import { reduxForm, Field } from 'redux-form';
import QuestionField from '../questions/QuestionField';
import Done from 'material-ui/svg-icons/action/done';


class Question extends Component {
  constructor(props) {
    super(props);

    this.state = { open: false };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  handleOpen() {
    this.setState({open: true});
  };

  handleClose() {
    this.setState({open: false});
  };

  submitHandler() {
    this.setState({ open: false });
    this.props.editQuestion(
      this.props.course._id,
      this.props.question._id,
      this.props.formValues
    );
  }

  renderFields() {
    return (
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

  checkUserUpVoted() {
    return(_.includes(this.props.question.usersUpVoted, this.props.user._id));
  }

  checkUserDownVoted() {
    return(_.includes(this.props.question.usersDownVoted, this.props.user._id));
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
          <FloatingActionButton
            mini={true}
            onClick={this.handleOpen}
          >
            <Edit />
          </FloatingActionButton>
          <Dialog
            title="Dialog With Actions"
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >
            <form onSubmit={this.props.handleSubmit(this.submitHandler)} style={{textAlign: 'center'}}>
              {this.renderFields()}
              <RaisedButton
                label="Edit Question"
                labelPosition="before"
                primary={true}
                icon={<Done />}
                type='submit'
              />
            </form>
          </Dialog>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  var badWord = /crap|ugly|brat|fool|fuck|fucking|f\*cking|f\*ck|bitch|b\*tch|shit|sh\*t|fool|dumb|couch potato|arse|arsehole|asshole|\*ssh\*l\*|\*\*\*\*|c\*ck|\*\*\*\*sucker|c\*cks\*ck\*r|\*\*\*\*|c\*nt|dickhead|d\*c\*h\*a\*|\*\*\*\*|f\*c\*|\*\*\*\*wit|f\*ckw\*t|fuk|f\*k|fuking|f\*k\*ng|mother\*\*\*\*er|m\*th\*rf\*ck\*r|\*\*\*\*\*\*|n\*gg\*r|pussy|p\*ssy|\*\*\*\*|sh\*t|wanker|w\*nk\*r|wankers|w\*nk\*rs|whore|wh\*r\*|slag| sl\*g|\*\*\*\*\*|b\*tch|f u c k|f\*c\*|b.i.t.c.h|b\*tch|d-i-c-k|d\*\*\*/gi;

  if (badWord.test(values.questionBody)) {
    errors.questionBody = 'Inappropriate expressions are not allowed';
  }

  return errors;
}

function mapStateToProps(state) {
  return {
    course: state.course,
    formValues: state.form.questionEditForm ? state.form.questionEditForm.values : false,
    questions: state.questions
  };
}

export default reduxForm({
  validate,
  form: 'questionEditForm'
})(connect(mapStateToProps, { castUpVote, castDownVote, deleteQuestion, editQuestion })(Question));

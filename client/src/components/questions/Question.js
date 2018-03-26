import React, { Component } from 'react';
import { connect } from 'react-redux';
import { castUpVote, castDownVote } from '../../actions';
import RaisedButton from 'material-ui/RaisedButton';
import * as _ from 'lodash';

class Question extends Component {
  checkUserUpVoted() {
    return(_.includes(this.props.question.usersUpVoted, this.props.user._id));
  }

  checkUserDownVoted() {
    return(_.includes(this.props.question.usersDownVoted, this.props.user._id));
  }

  render() {
    return (
      <div>
        <h5>{this.props.question.body}</h5>
        <h6>{this.props.question.upVote}</h6>
        <h6>{this.props.question.downVote}</h6>
        <RaisedButton
          primary={true}
          onClick={() => {this.props.castUpVote(this.props.course._id, this.props.question._id)}}
          disabled = {this.checkUserUpVoted()}
        >
          Upvote
        </RaisedButton>
        <RaisedButton
          secondary={true}
          onClick={() => {this.props.castDownVote(this.props.course._id, this.props.question._id)}}
          disabled = {this.checkUserDownVoted()}
        >
          Downvote
        </RaisedButton>
      </div>
    );
  }
}

export default connect(null, { castUpVote, castDownVote })(Question);

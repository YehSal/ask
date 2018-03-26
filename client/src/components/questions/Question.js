import React, { Component } from 'react';
import { connect } from 'react-redux';
import { castUpVote, castDownVote } from '../../actions';
import RaisedButton from 'material-ui/RaisedButton';

class Question extends Component {
  render() {
    return (
      <div>
        <h5>{this.props.question.body}</h5>
        <h6>{this.props.question.upVote}</h6>
        <h6>{this.props.question.downVote}</h6>
        <RaisedButton
          primary={true}
          onClick={() => {this.props.castUpVote(this.props.course._id, this.props.question._id)}}
          disabled = {this.props.userUpVoted}
        >
          Upvote
        </RaisedButton>
        <RaisedButton
          secondary={true}
          onClick={() => {this.props.castDownVote(this.props.course._id, this.props.question._id)}}
          disabled = {this.props.userDownVoted}
        >
          Downvote
        </RaisedButton>
      </div>
    );
  }
}

export default connect(null, { castUpVote, castDownVote })(Question);

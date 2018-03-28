import React, { Component } from 'react';
import { connect } from 'react-redux';
import { castUpVote, castDownVote } from '../../actions';
import RaisedButton from 'material-ui/RaisedButton';
import { Container, Row } from 'react-grid-system';
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
      <Container fluid style={{ lineHeight: '32px' }}>
        <Row align="start" style={{ height: '75px' }}>
          <h5>{this.props.question.body}</h5>
        </Row>
        <Row align="start" style={{ height: '75px' }}>
          <RaisedButton
            primary={true}
            onClick={() => {this.props.castUpVote(this.props.course._id, this.props.question._id)}}
            disabled={this.checkUserUpVoted()}
          >
            Upvote
          </RaisedButton>
          <h6>{this.props.question.upVote}</h6>

          <RaisedButton
            secondary={true}
            onClick={() => {this.props.castDownVote(this.props.course._id, this.props.question._id)}}
            disabled={this.checkUserDownVoted()}
          >
            Downvote
          </RaisedButton>
          <h6>{this.props.question.downVote}</h6>
        </Row>
        <hr/>
      </Container>
    );
  }
}

export default connect(null, { castUpVote, castDownVote })(Question);

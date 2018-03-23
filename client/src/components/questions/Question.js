import React, { Component } from 'react';
import { connect } from 'react-redux';
import { castUpVote, castDownVote } from '../../actions';
import RaisedButton from 'material-ui/RaisedButton';

class Question extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userCastedUpVote: false,
      userCastedDownVote: false
    }
  }
  
  render() {
    return (
      <div>
        <h5>{this.props.question.body}</h5>
        <h6>{this.props.question.upVote}</h6>
        <h6>{this.props.question.downVote}</h6>
        <RaisedButton
          primary={true}
          onClick={() => {
            this.props.castUpVote(this.props.course._id, this.props.question._id);
            this.setState({ userCastedUpVote: true });
          }}
          disabled = {this.state.userCastedUpVote ? true : false}
        >
          Upvote
        </RaisedButton>
        <RaisedButton
          secondary={true}
          onClick={() => {
            this.props.castDownVote(this.props.course._id, this.props.question._id)
            this.setState({ userCastedDownVote: true })
          }}
          disabled = {this.state.userCastedDownVote ? true : false}
        >
          Downvote
        </RaisedButton>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { courseAfterVote: state.courseAfterVote };
}

export default connect(mapStateToProps, { castUpVote, castDownVote })(Question);

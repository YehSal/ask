import React, { Component } from 'react';
import { connect } from 'react-redux';
import { castUpVote, castDownVote } from '../../actions';
import * as _ from 'lodash';
import RaisedButton from 'material-ui/RaisedButton';
import { List, ListItem } from 'material-ui/List';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ThumbDown from 'material-ui/svg-icons/action/thumb-down';
import Divider from 'material-ui/Divider';
import { ButtonStyle, ListStyle } from '../../styles/base';

class Question extends Component {
  checkUserUpVoted() {
    return(_.includes(this.props.question.usersUpVoted, this.props.user._id));
  }

  checkUserDownVoted() {
    return(_.includes(this.props.question.usersDownVoted, this.props.user._id));
  }

  renderRightIcon() {
    return(
      <div >
        <RaisedButton
          primary={true}
          labelPosition="before"
          label={this.props.question.upVote.toString()}
          labelStyle={ButtonStyle.upVoteStyle}
          icon={<ThumbUp />}
          onClick={() => {this.props.castUpVote(this.props.course._id, this.props.question._id)}}
          disabled={this.checkUserUpVoted()}
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
        >
        </RaisedButton>
      </div>
    );
  }

  render() {
    return (
      <div style={ListStyle.containerStyle}>
        <List>
          <ListItem
            style={ListStyle.itemStyle}
            disabled={true}
            primaryText={this.props.question.body}
            disableKeyboardFocus={false}
            rightIcon={this.renderRightIcon()}
          />
          <Divider />
        </List>
      </div>
    );
  }
}

export default connect(null, { castUpVote, castDownVote })(Question);

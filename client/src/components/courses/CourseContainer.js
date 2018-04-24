/*
 * CourseContainer passes data to Course and QuestionListContainer
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { findCourse, fetchUser, sendEmails } from '../../actions';
import Loader from '../Loader';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Course from './Course';
import QuestionForm from '../questions/QuestionForm';
import QuestionList from '../questions/QuestionList';
import io from 'socket.io-client';
import { socketURI } from '../../config/keys.js';
import Divider from 'material-ui/Divider';
import Dialog from 'material-ui/Dialog';

const socket = io(socketURI);

class CourseContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { open: false };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    socket.on('questions:changed', payload => {
      this.props.findCourse(payload.courseID);
    });
  }

  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  async handleSubmit() {
    await this.props.sendEmails(this.props.course._id);
    this.handleClose();
    this.props.history.push('/courses');
  }

  // CourseID Depends on whether the user was redirected after creating a new
  // course or the user clicked a link in the dashboard or somewhere else in the app
  componentDidMount() {
    if (this.props.course == undefined || this.props.course._id != this.props.location.state ? this.props.location.state.courseID : this.props.match.params.id) {
      const courseID = this.props.location.state ? this.props.location.state.courseID : this.props.match.params.id
      this.props.findCourse(courseID);
      this.props.fetchUser();
    } else {
      socket.emit('course', { courseID: this.props.course._id });
    }
  }

  componentWillReceiveProps() {
    socket.emit('course', {
      courseID: this.props.course ? this.props.course._id : false
    });
  }

  componentWillUnmount() {
    socket.emit('course:leave', { courseID: this.props.course._id });
  }

  renderContents() {
    if (this.props.course) {
      return (
        <div>
          <Course
            course={this.props.course}
            renderPassword={this.renderPassword}
          />
          <QuestionList
            course={this.props.course}
            user={this.props.user}
          />

        </div>
      );
    }

    return <Loader />;
  }


  renderDialog() {
    const actions = [
          <FlatButton
            label="Cancel"
            primary={true}
            onClick={this.handleClose}
          />,
          <FlatButton
            label="Yes"
            primary={true}
            keyboardFocused={true}
            onClick={this.handleSubmit}
          />,
        ];
    return (
      <Dialog
        title="End Session and Send Emails"
        actions={actions}
        modal={false}
        open={this.state.open}
        onRequestClose={this.handleClose}
      >
        Are you sure you want to end this session? This will send the questions via email to all the participants
      </Dialog>
    );
  }

  renderBasedonRole() {
    if (this.props.user.role === 2)
      return <QuestionForm />

    if (this.props.user.role === 1) {
      return (
        <div style={{textAlign: 'center', marginTop:5}}>
          <Divider style={{display: 'block', width: '100%', marginTop:10, marginBottom:10}} />
          {this.renderDialog()}
          <RaisedButton
            label="End Session"
            secondary={true}
            onClick={this.handleOpen}
            fullWidth={true}
            disabled={this.props.course ? this.props.course.sentQuestions : false}
          />
        </div>
      );
    }
  }

  render() {
    return(
      <div>
        {this.renderContents()}
        {this.renderBasedonRole()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth,
    course: state.course,
  };
}

export default withRouter(connect(mapStateToProps, {
  findCourse,
  fetchUser,
  sendEmails
})(CourseContainer));

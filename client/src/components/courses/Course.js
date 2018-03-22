/*
 * Course is the component responsible for showing the current course session.
 * It has the text box for students to ask and rate questions.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findCourse } from '../../actions';
import TextField from 'material-ui/TextField';


class Course extends Component {
  constructor(props) {
    super(props);
    this.state = { showPassword: true };
  }

  componentDidMount() {
    const courseID = this.props.history.location.state.courseID;
    this.props.findCourse(courseID);
  }

  renderPassword() {
    if (this.state.showPassword) {
      return (
        <div>
          <h3>Password: {this.props.course.password}</h3>
          <button onClick={() => this.setState({ showPassword: false })}>
            Hide Password
          </button>
        </div>
      );
    }

    return (
      <div>
        <button onClick={() => this.setState({ showPassword: true })}>
          Show Password
        </button>
      </div>
    );
  }

  renderCourse() {
    if (this.props.course) {
      return (
        <div>
          <h3>Course Title: {this.props.course.title}</h3>
          {this.renderPassword()}
          <TextField
            hintText="What is the difference between BFS and DFS?"
            floatingLabelText="Type Question Here"
            multiLine={true}
            rows={2}
          />
        </div>
      );
    }

    return (
      <div>
        <h1>Loader</h1>
      </div>
    )
  }

  render() {
    return(
      <div>
        {this.renderCourse()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { course: state.course };
}

export default connect(mapStateToProps, { findCourse })(Course);

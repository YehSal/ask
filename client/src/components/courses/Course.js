/*
 * Course is the component responsible for showing the current course session.
 * It has the text box for students to ask and rate questions.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findCourse } from '../../actions';

class Course extends Component {
  ComponentDidMount() {
    this.props.findCourse(this.props.courseID);
  }

  render() {
    console.log(this.props.courses)
    return (
      <div>
        <h1>This is the current course you selected</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { course: state.course };
}

export default connect(mapStateToProps, { findCourse })(Course);

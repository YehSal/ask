import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { compose } from 'recompose';
import MenuStudent from './MenuStudent';

class LoggedStudent extends Component {
  constructor(props) {
    super(props);

    this.joinCourseHandler = this.joinCourseHandler.bind(this);
  }

  joinCourseHandler() {
    return this.props.history.push('/courses/join');
  }

  render() {
    return (
      <MenuStudent {...this.props} joinCourseHandler={this.joinCourseHandler}/>
    );
  }
}

export default compose(withRouter)(LoggedStudent);

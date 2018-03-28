import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { compose } from 'recompose';
import Menu from './Menu';

class Logged extends Component {
  constructor(props) {
    super(props);

    this.dashboardHandler = this.dashboardHandler.bind(this);
  }

  dashboardHandler() {
    return this.props.history.push('/courses');
  }

  render() {
    return (
      <Menu {...this.props} dashboardHandler={this.dashboardHandler}/>
    );
  }
}

export default compose(withRouter)(Logged);

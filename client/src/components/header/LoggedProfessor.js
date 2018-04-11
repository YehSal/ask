import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { compose } from 'recompose';
import MenuProfessor from './MenuProfessor';

class LoggedProfessor extends Component {
  constructor(props) {
    super(props);

    this.dashboardHandler = this.dashboardHandler.bind(this);
  }

  dashboardHandler() {
    return this.props.history.push('/courses');
  }

  render() {
    return (
      <MenuProfessor {...this.props} dashboardHandler={this.dashboardHandler}/>
    );
  }
}

export default compose(withRouter)(LoggedProfessor);

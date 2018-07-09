import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Header from './Header';

class HeaderStudent extends Component {
  constructor(props) {
    super(props);

    this.handleTitleClick = this.handleTitleClick.bind(this);
  }

  handleTitleClick() {
    return this.props.history.push('/');
  }

  render() {
    return (
      <Header
        user={this.props.user}
        handleTitleClick={this.handleTitleClick}
        history={this.props.history}
      />
    );
  }
}

export default withRouter(HeaderStudent);


import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';

const style = {
  margin: 12,
};

class LogoutButton extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <FlatButton
        {...this.props}
        label="Logout"
        href="/api/logout"
      />
    );
  }
}
export default LogoutButton;

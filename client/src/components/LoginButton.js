
import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';

class LoginButton extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <FlatButton
        {...this.props}
        label="Login With Google"
        href="/auth/google"
      />
    );
  }
}
export default LoginButton;

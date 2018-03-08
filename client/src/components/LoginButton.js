
import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';

const style = {
  margin: 12,
};

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

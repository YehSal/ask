import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleTitleClick = this.handleTitleClick.bind(this);
  }

  renderButton() {
    switch (this.props.auth) {
      case null:
        return
      case false:
        return <LoginButton />
      default:
        return <LogoutButton />
    }
  }

  handleTitleClick() {
    console.log(this)
    return(
      <Link to={this.props.auth ? '/courses' : '/'}>
        QueueMe
      </Link>
    );
  }

  render() {
    const styles = {
      title: {
        cursor: 'pointer',
      },
    };

    return(
      <AppBar
        title={<span style={styles.title}>QueueMe</span>}
        onTitleClick={this.handleTitleClick}
        iconElementRight={this.renderButton()}
        showMenuIconButton={false}
      />
    );
  }
}

/*
 * @input: redux state
 * Allows the component to access certain piece of the state as props
 * Reducers determine the key in the state
 */
function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);

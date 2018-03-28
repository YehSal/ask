import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'recompose';
import AppBar from 'material-ui/AppBar';
import LoginButton from './LoginButton';
import Logged from './Logged';

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
        return <Logged />
    }
  }

  handleTitleClick() {
    return this.props.history.push('/courses');
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

/*
 * Compose makes it easy to hook up several HoC's by just chaining them
 */
export default compose(connect(mapStateToProps), withRouter)(Header);

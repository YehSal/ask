import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'recompose';
import AppBar from 'material-ui/AppBar';
import LoginButton from './LoginButton';
import LoggedProfessor from './LoggedProfessor';

class HeaderProfessor extends Component {
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
        return <LoggedProfessor />
    }
  }

  handleTitleClick() {
    return this.props.history.push('/');
  }

  render() {
    const styles = {
      title: {
        cursor: 'pointer',
      },
    };

    return(
      <AppBar
        title={<span style={styles.title}>Qme</span>}
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
export default compose(connect(mapStateToProps), withRouter)(HeaderProfessor);

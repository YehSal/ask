import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './header/HeaderProfessor';
import Dashboard from './Dashboard';
import CourseNew from './courses/CourseNew';
import CourseContainer from './courses/CourseContainer';
import RoleForm from './roles/RoleForm';
import ProfessorApp from './ProfessorApp';
import StudentApp from './StudentApp';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  renderContents() {
    if (this.props.user) {
      if (this.props.user.role === 0) {
        return (
          <MuiThemeProvider>
            <RoleForm />
          </MuiThemeProvider>
        );
      }

      if (this.props.user.role === 1) {
        return (
          <MuiThemeProvider>
            <ProfessorApp />
          </MuiThemeProvider>

        );
      }

      if (this.props.user.role === 2) {
        return (
          <div>
            <MuiThemeProvider>
              <StudentApp />
            </MuiThemeProvider>
          </div>
        );
      }
    }
  }

  render() {
    return(
      <div>
        {this.renderContents()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.auth };
}

export default connect(mapStateToProps, actions)(App);

import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HeaderProfessor from './header/HeaderProfessor';
import RoleForm from './roles/RoleForm';
import ProfessorApp from './ProfessorApp';
import StudentApp from './StudentApp';
import Landing from './landing/Landing';
import './App.css';

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
      } else if (this.props.user.role === 1) {
        return (
          <MuiThemeProvider>
            <ProfessorApp />
          </MuiThemeProvider>

        );
      } else if (this.props.user.role === 2) {
        return (
          <div>
            <MuiThemeProvider>
              <StudentApp />
            </MuiThemeProvider>
          </div>
        );
      }
    }
    return (
      <MuiThemeProvider>
        <div>
          <BrowserRouter>
            <div>
              <HeaderProfessor />
              <Route exact path="/" component={Landing} />
            </div>
          </BrowserRouter>
        </div>
      </MuiThemeProvider>
    );
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

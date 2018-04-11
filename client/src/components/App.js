import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './header/HeaderProfessor';
import Landing from './Landing';
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
          <ProfessorApp />
        );
      }

      if (this.props.user.role === 2) {
        return (
          <div>
            <StudentApp />
          </div>
        );
      }
    }
    return (
      <MuiThemeProvider>
        <div>
          <BrowserRouter>
            <div>
              <Header />
              <Route exact path="/" component={Landing} />
              <Route exact path="/courses" component={Dashboard} />
              <Route exact path="/courses/new" component={CourseNew} />
              <Route exact path="/course/:id" component={CourseContainer} />
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

import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dashboard from './Dashboard';
import CourseJoin from './courses/CourseJoin';
import CourseNew from './courses/CourseNew';
import CourseContainer from './courses/CourseContainer';

import HeaderContainer from './header/HeaderContainer';
import Landing from './landing/Landing';

import RestrictedComponent from './RestrictedComponent';
import * as actions from '../actions';
import { withEither } from '../helpers/withEither';
import { isStudent, isProfessor, isUnregistered } from '../helpers/userHelpers';

import '../stylesheets/main.css';

// TODO: Refactor Header component as Landing
class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return(
      <MuiThemeProvider>
        <div>
          <BrowserRouter>
            <div>
              <HeaderContainer user={this.props.user}/>
              <Route exact path="/" render={props => <Landing user={this.props.user} />} />
              <Route exact path="/courses" render={props => this.props.user && isProfessor(this.props.user) ? <Dashboard /> : <RestrictedComponent />} />
              <Route exact path="/courses/new" render={props => this.props.user && isProfessor(this.props.user) ? <CourseNew /> : <RestrictedComponent />} />
              <Route exact path="/courses/join" render={props => this.props.user && isStudent(this.props.user) ? <CourseJoin /> : <RestrictedComponent />} />
              <Route exact path="/course/:id" render={props => this.props.user && (isProfessor(this.props.user) || isStudent(this.props.user)) ? <CourseContainer /> : <RestrictedComponent />} />
            </div>
          </BrowserRouter>
        </div>
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.auth };
}

export default connect(mapStateToProps, actions)(App);

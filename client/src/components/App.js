import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import CourseNew from './courses/CourseNew';
import Course from './courses/Course';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <BrowserRouter>
            <div>
              <Header />
              <Route exact path="/" component={Landing} />
              <Route exact path="/courses" component={Dashboard} />
              <Route exact path="/courses/new" component={CourseNew} />
              <Route exact path="/course/:id" component={Course} />
            </div>
          </BrowserRouter>
        </div>
      </MuiThemeProvider>
    );
  }
};

export default connect(null, actions)(App);

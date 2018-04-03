import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './header/Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import CourseNew from './courses/CourseNew';
import CourseContainer from './courses/CourseContainer';
import RoleForm from './roles/RoleForm';

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

      if (this.props.user.role === 2) {
        return (
          <div>
            Student View
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

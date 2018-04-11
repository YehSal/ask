import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './header/HeaderStudent';
import Landing from './Landing';
import CourseNew from './courses/CourseNew';
import CourseContainer from './courses/CourseContainer';
import CourseJoin from './courses/CourseJoin';

const StudentApp = () => {
  return (
    <MuiThemeProvider>
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/courses/join" component={CourseJoin} />
            <Route exact path="/courses/new" component={CourseNew} />
            <Route exact path="/course/:id" component={CourseContainer} />
          </div>
        </BrowserRouter>
      </div>
    </MuiThemeProvider>
  );
}

export default StudentApp;

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './header/HeaderStudent';
import LandingStudent from './landing/LandingStudent';
import CourseNew from './courses/CourseNew';
import CourseContainer from './courses/CourseContainer';
import CourseJoin from './courses/CourseJoin';
import './App.css';

const StudentApp = () => {
  return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={LandingStudent} />
            <Route exact path="/courses/join" component={CourseJoin} />
            <Route exact path="/courses/new" component={CourseNew} />
            <Route exact path="/course/:id" component={CourseContainer} />
          </div>
        </BrowserRouter>
      </div>
  );
}

export default StudentApp;

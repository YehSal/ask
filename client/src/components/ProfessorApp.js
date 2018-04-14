import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HeaderProfessor from './header/HeaderProfessor';
import Landing from './Landing';
import Dashboard from './Dashboard';
import CourseNew from './courses/CourseNew';
import CourseContainer from './courses/CourseContainer';

const ProfessorApp = () => {
  return (
      <div>
        <BrowserRouter>
          <div>
            <HeaderProfessor />
            <Route exact path="/" component={Landing} />
            <Route exact path="/courses" component={Dashboard} />
            <Route exact path="/courses/new" component={CourseNew} />
            <Route exact path="/course/:id" component={CourseContainer} />
          </div>
        </BrowserRouter>
      </div>
  );
}

export default ProfessorApp;

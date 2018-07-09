import React from 'react';
import { withRouter } from 'react-router-dom';
import { isStudent, isProfessor, isUnregistered } from '../../helpers/userHelpers';
import RaisedButton from 'material-ui/RaisedButton';
import LandingRoleForm from './LandingRoleForm';
import About from './About';

const btnConditionalRendering = (user, history) => {
  if (isStudent(user)) {
    return (
      <div>
        <RaisedButton
          className="btn-animated btn"
          label="Join Class"
          onClick={() => history.push('/courses/join')}
        />
      </div>
    );
  }

  if (isProfessor(user)) {
    return (
      <div>
        <RaisedButton
          className="btn-animated btn-landing"
          label="Create Class"
          onClick={() => history.push('/courses/new')}
        />
        <RaisedButton
          className="btn-animated btn-landing"
          label="Dashboard"
          onClick={() => history.push('/courses')}
        />
      </div>
    );
  }

  if (isUnregistered(user)) {
    return (
      <div>
        <LandingRoleForm />
      </div>
    );
  }

  return null;
};

const Landing = ({ user, history }) => {
  return (
    <div>
      <div className="header">
        <div className="text-box">
          <h1 className="header-primary">
            <span className="header-primary-main">
              QME
            </span>
            <span className="header-primary-sub">
              the best way to ask questions
            </span>
          </h1>
          {btnConditionalRendering(user, history)}
        </div>
      </div>
      <About />
    </div>
  );
};

export default withRouter(Landing);

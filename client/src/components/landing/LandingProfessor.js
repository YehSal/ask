import React from 'react';
import { withRouter } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import './Landing.css';

const LandingProfessor = ({ history }) => {
  return(
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
    </div>
  );
};

export default withRouter(LandingProfessor);

import React from 'react';
import Paper from 'material-ui/Paper';
import { withRouter } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import './base.css';

//TODO: Button is going to be Join/create class based on user role

const Landing = ({ history }) => {
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
          className="btn-animated btn"
          label="Join Class"
          onClick={() => history.push('/courses/join')}
        />
      </div>
    </div>
  );
};

export default withRouter(Landing);

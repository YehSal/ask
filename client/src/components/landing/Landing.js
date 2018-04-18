import React from 'react';
import { withRouter } from 'react-router-dom';

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
      </div>
    </div>
  );
};

export default withRouter(Landing);

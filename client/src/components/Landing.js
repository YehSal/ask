import React from 'react';
import Paper from 'material-ui/Paper';
import { hOneStyle } from '../styles/base';

const Landing = () => {
  return(
    <div style={{ textAlign: 'center' }}>
      <Paper zDepth={2} style={hOneStyle}>
        <h1>Qme</h1>
      </Paper>
      Ask all the questions you want!
    </div>
  );
};

export default Landing;

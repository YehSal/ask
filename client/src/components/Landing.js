import React from 'react';
import Paper from 'material-ui/Paper';
import { hOneStyleGreen } from '../styles/base';

//TODO: Button is going to be Join/create class based on user role
const subHeaderStyle = {
  fontSize: 15,
  weight:300,
  fontFamily: 'Open Sans'
}

const Landing = () => {
  return(
    <div style={{ textAlign: 'center' }}>
      <h1>Efficient, organized way <br/> to ask questions</h1>
      <h2 style={subHeaderStyle}>We reenvisioned the classroom experience using backchannel</h2>
      <button>Join Class</button>
    </div>
  );
};

export default Landing;

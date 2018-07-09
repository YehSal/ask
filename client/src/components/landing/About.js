import React from 'react';
import Grid from '@material-ui/core/Grid';

const About = () => {
  return (
    <div className="section-about">
      <div className="u-center-text u-margin-bottom-8">
        <h2 className="heading-secondary">
          Education is important!!
        </h2>
      </div>
      <Grid container justify={'center'} alignItems={'center'} direction={'row'} spacing={24}>
        <Grid item sm={6}>
          Text Content
        </Grid>
        <Grid item sm={6}>
          Image Composition
        </Grid>
      </Grid>
    </div>
  );
}

export default About;

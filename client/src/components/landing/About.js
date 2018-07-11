import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';


const About = () => {
  return (
    <div className="section-about">
      <div className="u-center-text u-margin-bottom-8">
        <h2 className="heading-secondary">
          We take education seriously
        </h2>
      </div>
      <Grid container justify={'center'} direction={'row'} spacing={8}>
        <Grid item sm={5}>
          <h3 className="heading-tertiary u-margin-bottom-small">Encourage Students to Engage in the Classroom</h3>
          <p className="paragraph">
            Our goal is to provide a platform for students to engage the classroom and ask questions without facing any barriers.
          </p>

          <h3 className="heading-tertiary u-margin-bottom-small">Live interaction during class</h3>
          <p className="paragraph">
            We believe that the best way to participate in class is through discussion. QME adapts a backchannel communication model to allows students, teaching fellows, and instructors to all interact with each other during class.
          </p>

          <Button variant="contained" size="medium" className="learn-more-btn">Learn more &rarr;</Button>
        </Grid>
        <Grid item sm={5} className="composition">
          <img src="/about_photo_1.jpg" alt="Photo 1" className="composition-photo composition-photo-p1"></img>
          <img src="/about_photo_2.jpg" alt="Photo 2" className="composition-photo composition-photo-p2"></img>
          <img src="/about_photo_3.jpg" alt="Photo 3" className="composition-photo composition-photo-p3"></img>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;

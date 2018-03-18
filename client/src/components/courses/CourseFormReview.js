import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import RaisedButton from 'material-ui/RaisedButton';
import * as actions from '../../actions';

const style = {
  margin: 12
};

const CourseFormReview = ({ onCancel, formValues, createCourse, history }) => {
  return (
    <div>
      <h2>Please confirm your entries</h2>
      <div>
        <div>
          <label>Course Title:</label>
          <div>{formValues.courseTitle}</div>
        </div>
      </div>
      <RaisedButton
        label="Back"
        secondary={true}
        style={style}
        onClick={onCancel}
      />
      <RaisedButton
        label="Submit"
        primary={true}
        style={style}
        onClick={() => createCourse(formValues, history)}
      />
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.courseForm.values };
}

export default compose(connect(mapStateToProps, actions), withRouter)(CourseFormReview);

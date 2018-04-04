import React from 'react';
import CourseListContainer from './courses/CourseListContainer';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Paper from 'material-ui/Paper';

const style = {
  marginRight: 20,
};

const hOneStyle = {
  margin: '5px 5px 10px 5px',
	padding: '15px 5px 15px 5px',
	background: '#16ca8b',
  borderRadius: '10% / 30%',
  textAlign: 'center',

};

const Dashboard = () => {
  return (
    <div>
      <Paper zDepth={2} style={hOneStyle}>
        <h1>Dashboard</h1>
      </Paper>
      <CourseListContainer />
      <FloatingActionButton style={style} href='/courses/new'>
        <ContentAdd />
      </FloatingActionButton>
      </div>
  );
};

export default Dashboard;

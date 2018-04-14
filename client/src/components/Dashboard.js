import React from 'react';
import CourseListContainer from './courses/CourseListContainer';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Paper from 'material-ui/Paper';
import { hOneStyleVanilla } from '../styles/base';


const style = {
  margin: 20,
  textAlign: 'center'
};


const Dashboard = () => {
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Dashboard</h1>
      <CourseListContainer />
      <div style={style}>
        <FloatingActionButton href='/courses/new'>
          <ContentAdd />
        </FloatingActionButton>
      </div>

    </div>
  );
};

export default Dashboard;

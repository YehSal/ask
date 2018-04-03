import React from 'react';
import CourseListContainer from './courses/CourseListContainer';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
  marginRight: 20,
};

const Dashboard = () => {
  return (
    <div>
      Dashboard
      <CourseListContainer />
      <FloatingActionButton style={style} href='/courses/new'>
        <ContentAdd />
      </FloatingActionButton>
    </div>
  );
};

export default Dashboard;

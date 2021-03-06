import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/scss/course.scss';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const renderContents = (courses) => {
  return courses.map(course => {
    console.log(`${course.title}: /course/${course._id}`);
    return (
      <TableRow key={course._id}>
        <TableRowColumn>
          <Link to={{
            pathname: `/course/${course._id}`,
            state: { courseID: course._id }
          }}>
            <h5 className="pageTitle">{course.title}</h5>
          </Link>
        </TableRowColumn>
        <TableRowColumn>{course.instructorName}</TableRowColumn>
        <TableRowColumn>{course.participants.length}</TableRowColumn>
        <TableRowColumn>{course.questions.length}</TableRowColumn>
        <TableRowColumn>{course.sentQuestions ? 'Yes' : 'No'}</TableRowColumn>
      </TableRow>
    );
  });
}

const CourseList = ({ courses }) => {
  return (
    <div>
      <Table fixedFooter={false} fixedHeader={false}>
        <TableHeader displaySelectAll={false} adjustForCheckbox={true}>
          <TableRow>
            <TableHeaderColumn>Course Title</TableHeaderColumn>
            <TableHeaderColumn>Instructor</TableHeaderColumn>
            <TableHeaderColumn># Participants</TableHeaderColumn>
            <TableHeaderColumn># Questions</TableHeaderColumn>
            <TableHeaderColumn>Questions Sent</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={true}>
          {renderContents(courses)}
        </TableBody>
      </Table>
    </div>
  );
}

export default CourseList;

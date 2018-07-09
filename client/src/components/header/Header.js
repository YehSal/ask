import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Menu from './Menu';
import { isStudent, isProfessor, isUnregistered } from '../../helpers/userHelpers';

//NOTE: As we have more menu items, menu items should be turned into arrays
const menuItemTitleStudent = 'Join Course';
const menuItemTitleProfessor = 'Dashboard';

const renderButton = (user, history) => {
  switch(user) {
    case null:
      return;
    case false:
      return (
        <FlatButton
          label="Login With Google"
          href="/auth/google"
        />
      );
    default:
      return (
        <Menu
          {...this.props}
          onClickHandler={onClickHandler(user, history)}
          menuItemTitle = {isProfessor(user) ? menuItemTitleProfessor : menuItemTitleStudent}
        />
      );
  }
}

const onClickHandler = (user, history) => {
  if (isProfessor(user))
    return () => history.push('/courses');

  if (isStudent(user))
    return () => history.push('/courses/join');
}

const Header = ({ user, handleTitleClick, history }) => {
  return(
    <AppBar
      title={<span className="app-bar-title">QME</span>}
      onTitleClick={handleTitleClick}
      iconElementRight={renderButton(user, history)}
      showMenuIconButton={false}
    />
  );
}

export default Header;

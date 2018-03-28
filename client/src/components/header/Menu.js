import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const Menu = ({ dashboardHandler, history }) => {

  return (
    <IconMenu
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
      <MenuItem
        primaryText="Dashboard"
        onClick={dashboardHandler}
      />
      <MenuItem
        primaryText="Sign out"
        href="/api/logout"
      />
    </IconMenu>
  );
}

export default Menu;

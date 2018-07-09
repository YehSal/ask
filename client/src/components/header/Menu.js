import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const Menu = ({ onClickHandler, menuItemTitle, history }) => {
  return (
    <IconMenu
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
      <MenuItem
        primaryText={menuItemTitle}
        onClick={onClickHandler}
      />
      <MenuItem
        primaryText="Sign out"
        href="/api/logout"
      />
    </IconMenu>
  );
}

export default Menu;

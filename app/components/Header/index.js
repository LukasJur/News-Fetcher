import React from 'react';

import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1,
  },
}));
const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.typographyStyles}>
          News Fetcher
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

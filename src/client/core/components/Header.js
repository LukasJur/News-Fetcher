import React from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import logo from 'images/news_fetcher_logo.png';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'row',
    background: '#8cfe67',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
const Header = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <img src="assets/images/news_fetcher_logo.png" alt="" />
      News Fetcher
    </div>
  );
};

Header.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(Header);

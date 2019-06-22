import React from 'react';
import { withStyles } from '@material-ui/core';
// import { Header } from '_components';
import { Header } from '../../core/components';

const styles = {
  root: {
    backgroundColor: 'gray',
  },
};
const Main = () => (
  <div>
    <Header />
    Main information will be displayed here.
  </div>
);
export default withStyles(styles)(Main);

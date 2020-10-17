import React from 'react';

import { Grid } from '@material-ui/core';
import Header from '../../components/Header';
import SearchForm from '../SearchForm/index';
import SearchForm2 from '../SearchForm2/index';

export default function SearchPage() {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item xs={false} sm={2} />
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <SearchForm2 />
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
      <Grid item xs={false} sm={2} />
    </Grid>
  );
}

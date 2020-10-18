import React, { memo } from 'react';
import { Grid, Paper, TextField, MenuItem } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';

import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import connect from 'react-redux/es/connect/connect';
import messages from './messages';
import H2 from '../../components/H2';
import CenteredSection from '../SearchForm2/CenteredSection';
import { changeCountry, changeCategory } from './actions';
import { makeSelectCategory, makeSelectCountry } from './selectors';
import { useInjectReducer } from '../../utils/injectReducer';
// import { useInjectSaga } from '../../utils/injectSaga';
import reducer from './reducer';
// TODO Define saga
import saga from './saga';

const exampleCountries = [
  {
    name: 'USA',
    key: 1,
  },
  {
    name: 'CANADA',
    key: 2,
  },
  {
    name: 'MEXICO',
    key: 3,
  },
];

const key = 'searchForm';

export const SearchForm = (category, country, onChangeCountry, onChangeCategory) => {
  useInjectReducer({ key, reducer });
  // useInjectSaga({ key, saga });
  return (
    <Paper>
      <Grid container direction="column" alignContent="center">
        <Grid item xs={3}>
          <H2>
            <CenteredSection>
              <FormattedMessage {...messages.topLineText} />
            </CenteredSection>
          </H2>
        </Grid>
        <Grid item xs={2}>
          <TextField
            id="outlined-select-country"
            select
            label="Select"
            value={country}
            onChange={onChangeCountry}
            helperText="Please select a country"
            variant="outlined"
          >
            {exampleCountries.map(cnt => (
              <MenuItem key={cnt.key} value={cnt.name}>
                {country.name}
              </MenuItem>
            ))}
          </TextField>
          <FormattedMessage {...messages.country} />
        </Grid>
        <Grid item xs={2}>
          <FormattedMessage {...messages.category} />
        </Grid>
      </Grid>
    </Paper>
  );
};

SearchForm.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  onChangeCountry: PropTypes.func,
  onChangeCategory: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  country: makeSelectCountry(),
  category: makeSelectCategory(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeCountry: evt => dispatch(changeCountry(evt.target.value)),
    onChangeCategory: evt => dispatch(changeCategory(evt.target.value)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(SearchForm);

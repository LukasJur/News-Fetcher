/**
 *
 * SearchForm
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';
import { getCountries, getCategories } from 'utils/parametersUtils';
import { Button, Grid, MenuItem, Paper } from '@material-ui/core';
import CenteredSection from './CenteredSection';
import StyledTextField from './StyledTextField';
import PaddedHorizontalRow from './PaddedHorizontalRow';
import makeSelectSearchFormData from './selectors';
import reducer from './reducer';
import messages from './messages';
import H2 from '../../components/H2';
import { changeCountry } from '../SearchForm/actions';

export const SearchForm2 = props => {
  useInjectReducer({ key: 'searchForm2', reducer });
  const [country, setCountry] = useState('');
  const [isCountryRequired, setCountryRequired] = useState(true);
  const [category, setCategory] = useState('');
  const [isCategoryRequired, setCategoryRequired] = useState(true);

  const handleChangeCountry = evt => {
    setCountry(evt.target.value);
    setCategoryRequired(false);
  };

  const handleChangeCategory = evt => {
    setCategory(evt.target.value);
    setCountryRequired(false);
  };

  const submitSearchForm = () => {console.log("Submitted")};

  const countries = getCountries();

  const categories = getCategories();

  //TODO Add Flag icons to country dropdown (use https://www.countryflags.io/)

  return (
    <Paper>
      <Grid
        container
        direction="column"
        alignContent="center"
        alignItems="center"
      >
        <Grid item xs={3}>
          <H2>
            <CenteredSection>
              <FormattedMessage {...messages.topLineText} />
            </CenteredSection>
          </H2>
        </Grid>
        <Grid
          container
          justify="center"
          direction="row"
          alignContent="center"
          spacing={10}
        >
          <Grid item xs={2}>
            <StyledTextField
              id="outlined-select-country"
              select
              label="Country"
              value={country}
              onChange={handleChangeCountry}
              variant="outlined"
              required={isCountryRequired}
              chwidth={25}
            >
              {countries.map(cnt => (
                <MenuItem key={cnt.key} value={cnt.name}>
                  {cnt.name}
                </MenuItem>
              ))}
            </StyledTextField>
          </Grid>
          <Grid item xs={2}>
            <StyledTextField
              select
              label="Category"
              value={category}
              onChange={handleChangeCategory}
              variant="outlined"
              required={isCategoryRequired}
              chwidth={30}
            >
              {categories.map(cat => (
                <MenuItem key={cat.key} value={cat.code}>
                  {cat.name}
                </MenuItem>
              ))}
            </StyledTextField>
          </Grid>
        </Grid>
        <PaddedHorizontalRow item xs={2} pad={0.5} />
        <Grid item xs={2}>
          <Button variant="contained" color="primary" onSubmit={submitSearchForm}>
            <FormattedMessage {...messages.fetchButton} />
          </Button>
        </Grid>
        <PaddedHorizontalRow item xs={2} pad={0.5} />
      </Grid>
    </Paper>
  );
};

SearchForm2.propTypes = {
  country: PropTypes.string,
  onChangeCountry: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  searchForm2: makeSelectSearchFormData(),
});

const mapDispatchToProps = dispatch => ({
  onChangeCountry: evt => dispatch(changeCountry(evt.target.value)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(SearchForm2);

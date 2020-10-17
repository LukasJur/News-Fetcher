/**
 * SearchForm selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectSearchForm = state => state.home || initialState;

const makeSelectCountry = () =>
  createSelector(
    selectSearchForm,
    state => state.country,
  );

const makeSelectCategory = () =>
  createSelector(
    selectSearchForm,
    state => state.category,
  );

export { selectSearchForm, makeSelectCountry, makeSelectCategory };

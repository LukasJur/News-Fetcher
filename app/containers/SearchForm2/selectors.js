import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the searchForm2 state domain
 */

const selectSearchForm2Domain = state => state.searchForm2 || initialState;

/**
 * Form data selector used by SearchForm2
 */

const makeSelectSearchFormData= () =>
  createSelector(
    selectSearchForm2Domain,
    searchFormState => searchFormState.searchForm2.formData,
  );

export default makeSelectSearchFormData;
export { selectSearchForm2Domain };

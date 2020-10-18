import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the searchForm state domain
 */

const selectSearchFormDomain = state => state || initialState;

/**
 * Form data selector used by SearchForm
 */
 
export const makeSelectSearchFormData= () =>
  createSelector(
    selectSearchFormDomain,
    searchFormState => searchFormState.searchForm2,
  ); 

// export default makeSelectSearchFormData;
// export default selectSearchFormDomain;

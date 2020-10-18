import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the searchForm2 state domain
 */

const selectSearchFormDomain = state => state || initialState;

/**
 * Form data selector used by SearchForm2
 */
 
const makeSelectSearchFormData= () =>
  createSelector(
    selectSearchFormDomain,
    searchFormState => searchFormState,
  ); 

export default makeSelectSearchFormData;
// export default selectSearchFormDomain;

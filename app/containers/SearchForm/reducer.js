/*
 * SearchForm Reducer
 *
 */

import produce from 'immer';
import { CHANGE_CATEGORY, CHANGE_COUNTRY } from './constants';

// The initial state of the App
export const initialState = {
  country: '',
  category: '',
};

/* eslint-disable default-case, no-param-reassign */
const searchFormReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_COUNTRY:
        draft.country = action.country;
        break;
      case CHANGE_CATEGORY:
        draft.category = action.category;
        break;
    }
  });

export default searchFormReducer;

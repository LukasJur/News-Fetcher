/*
 *
 * SearchForm2 reducer
 *
 */
import produce from 'immer';
import { SUBMIT_SEARCH, ARTICLES_LOADED, ARTICLES_LOAD_ERROR } from './constants';

export const initialState = {
  country: null,
  category: null,
  error: null,
  articles: null,
};

/* eslint-disable default-case, no-param-reassign */
const searchForm2Reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SUBMIT_SEARCH:
        draft.country = action.country;
        draft.category = action.category;
        break;
      case ARTICLES_LOADED:
        draft.articles = action.articles;
        break;
      case ARTICLES_LOAD_ERROR:
        draft.error = action.error;
        break;
    }
  });

export default searchForm2Reducer;

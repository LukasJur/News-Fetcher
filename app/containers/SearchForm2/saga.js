/**
 * Gets news data from NEWS API
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import {
  X_API_KEY_HEADER,
  CATEGORY_PARAMETER,
  COUNTRY_PARAMETER,
  KEYWORD_PARAMETER,
  API_KEY
} from '../../appConstants';
import { SUBMIT_SEARCH } from './constants';
import { articlesLoaded, articlesLoadError } from './actions';
import request from '../../utils/request';
import { makeSelectSearchFormData } from './selectors';

export function* getArticles(action) {
  try {
    const requestURL = new URL('https://newsapi.org/v2/top-headlines');
    const country = action.formData.country;
    const category = action.formData.category;
    if (country) {
      requestURL.searchParams.append(COUNTRY_PARAMETER, country);
    }
    if (category) {
      requestURL.searchParams.append(CATEGORY_PARAMETER, category);
    }
  
    const headers = new Headers();
    headers.append(X_API_KEY_HEADER, API_KEY);
    // Call request helper (see 'utils/request')
    const articles = yield call(request(requestURL,{headers}));
    console.log(articles)
    yield put(articlesLoaded(articles));
  } catch (err) {
    console.log(err);
    yield put(articlesLoadError(err));
  }
}

export default function* articleData() {
  yield takeLatest(SUBMIT_SEARCH, getArticles);
}

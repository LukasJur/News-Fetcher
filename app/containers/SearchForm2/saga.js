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
import makeSelectFormData from './selectors';

export function* getArticles() {
  const formData = yield select(makeSelectFormData());
  const requestURL = new URL('https://newsapi.org/v2/top-headlines');

  if (formData.country) {
    requestURL.searchParams.append(COUNTRY_PARAMETER, formData.country);
  }
  if (formData.category) {
    requestURL.searchParams.append(CATEGORY_PARAMETER, formData.category);
  }

  const headers = new Headers();
  headers.append(X_API_KEY_HEADER, API_KEY);

  try {
    // Call request helper (see 'utils/request')
    const articles = yield call(request, { headers });
    yield put(articlesLoaded(articles));
  } catch (err) {
    yield put(articlesLoadError(err));
  }
}

export default function* articleData() {
  yield takeLatest(SUBMIT_SEARCH, getArticles);
}

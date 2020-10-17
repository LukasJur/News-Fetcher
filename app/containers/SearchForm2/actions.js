/*
 *
 * SearchForm2 actions
 *
 */

import {
  SUBMIT_SEARCH,
  ARTICLES_LOAD_ERROR,
  ARTICLES_LOADED,
} from './constants';

/**
 * Submit search request
 *
 * @param  formData data containing searchParameters
 *
 * @return {{type: string, formData: *}} An action object with a type of SUBMIT_SEARCH and form data
 */
export function submitSearch(formData) {
  return {
    type: SUBMIT_SEARCH,
    formData,
  };
}

/**
 * Articles loaded successfully
 *
 * @param articles
 * @returns {{type: string, articles: *}}
 */
export function articlesLoaded(articles) {
  return {
    type: ARTICLES_LOADED,
    articles,
  };
}

/**
 * Articles loading error action
 *
 * @param error
 * @returns {{type: string, error: *}}
 */
export function articlesLoadError(error) {
  return {
    type: ARTICLES_LOAD_ERROR,
    error,
  };
}

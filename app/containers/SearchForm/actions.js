/*
 * Search Form Actions
 *
 */

import { CHANGE_CATEGORY, CHANGE_COUNTRY } from './constants';

/**
 * Changes the country field of the form
 *
 * @param  country The new country
 *
 * @return {{type: string, country: *}}An action object with a type of CHANGE_COUNTRY
 */
export function changeCountry(country) {
  return {
    type: CHANGE_COUNTRY,
    country,
  };
}

/**
 * Changes the category field of the form
 *
 * @param category The new category
 * @returns {{type: string, category: *}} An action object with a type of CHANGE_CATEGORY
 */
export function changeCategory(category) {
  return {
    type: CHANGE_CATEGORY,
    category,
  };
}

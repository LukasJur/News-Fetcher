/*
 * Search Form Messages
 *
 * This contains all the text for the SearchPage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.SearchForm';

export default defineMessages({
  topLineText: {
    id: `${scope}.topLineText`,
    defaultMessage: 'Fetch top news from',
  },
  fetchButton: {
    id: `${scope}.fetchButton`,
    defaultMessage: 'Fetch',
  },
  country: {
    id: `${scope}.country`,
    defaultMessage: 'country',
  },
  category: {
    id: `${scope}.category`,
    defaultMessage: 'category',
  },
  any: {
    id: `${scope}.any`,
    defaultMessage: 'any',
  },
});

import React from 'react';
import { Paper } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import H2 from '../../components/H2';
import CenteredSection from './CenteredSection';

const SearchForm = () => (
  <Paper>
    <H2>
      <CenteredSection>
        <FormattedMessage {...messages.topLineText} />
      </CenteredSection>
    </H2>
    <FormattedMessage {...messages.country} />
    <FormattedMessage {...messages.category} />
  </Paper>
);

export default SearchForm;

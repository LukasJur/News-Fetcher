import styled from 'styled-components';
import { Grid } from '@material-ui/core';

const PaddedHorizontalRow = styled(Grid)`
  padding: ${props => props.pad || 0}em;
`;

export default PaddedHorizontalRow;

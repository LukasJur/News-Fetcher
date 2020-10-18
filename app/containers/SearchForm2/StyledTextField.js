import styled from 'styled-components';
import { TextField } from '@material-ui/core';

const StyledTextField = styled(TextField)`
  width: ${props => props.chwidth || 0}ch;
`;

export default StyledTextField;

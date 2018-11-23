import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import * as React from 'react';
import styled from 'styled-components';

export const AddItem: React.SFC<any> = () => (
  <StyledForm>
    <TextField label='Item' />
    <TextField label='Word' />
    <TextField label='Description' multiline={true} rowsMax={4} />
    <input type='file' />
    <Button color='secondary' variant='contained'>
      reset
    </Button>
    <Button color='primary' variant='contained'>
      submit
    </Button>
  </StyledForm>
);

const StyledForm = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: space-around;
  // align-items: center;
  height: 100%;
  width: 100%;
`;

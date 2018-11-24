import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import * as React from 'react';
import styled from 'styled-components';

import { actions } from '@action/app/addItem';
import { IAddItemState } from '@models/app';

type Type = typeof actions & IAddItemState;

export const AddItem: React.SFC<Type> = (props: Type) => (
  <StyledForm>
    <TextField
      label='Item'
      name='name'
      value={props.input.name}
      onChange={props.changeInput}
    />
    <TextField
      label='Word'
      name='word'
      value={props.input.word}
      onChange={props.changeInput}
    />
    <TextField
      label='Description'
      multiline={true}
      name='desc'
      value={props.input.desc}
      onChange={props.changeInput}
    />
    <input type='file' name='file' onChange={props.changeInput} />
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

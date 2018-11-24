import { TextField } from '@/components/Atoms';
import Button from '@material-ui/core/Button';
import * as React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import styled from 'styled-components';

class AddItem extends React.PureComponent<InjectedFormProps<any>> {
  public render() {
    return (
      <StyledForm>
        <Field name='item' component={TextField} label='Item name' />
        <Field name='word' component={TextField} label='Search word' />
        <Field
          name='desc'
          component={TextField}
          label='Description'
          multiline={true}
        />
        <input type='file' accept='image/*' name='file' />
        <Button
          onClick={this.props.reset}
          color='secondary'
          type='reset'
          variant='contained'
        >
          reset
        </Button>
        <Button color='primary' type='button' variant='contained'>
          submit
        </Button>
      </StyledForm>
    );
  }
}

export default reduxForm({
  form: 'addItemForm',
})(AddItem);

const StyledForm = styled.form`
  display: inline-flex;
  flex-direction: column;
  justify-content: space-around;
  // align-items: center;
  height: 100%;
  width: 100%;
`;

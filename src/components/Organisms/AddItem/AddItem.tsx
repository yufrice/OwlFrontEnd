import { TextField } from '@/components/Atoms';
import Button from '@material-ui/core/Button';
import * as React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import styled from 'styled-components';

interface IProps {
  onChangeFile: any;
}

class AddItem extends React.PureComponent<InjectedFormProps<any> & IProps> {
  public render() {
    return (
      <StyledForm>
        <Field
          name='item'
          required={true}
          component={TextField}
          label='Item name'
        />
        <Field
          name='word'
          required={true}
          component={TextField}
          label='Search word'
        />
        <Field
          required={true}
          name='desc'
          component={TextField}
          label='Description'
          multiline={true}
        />
        <input
          onChange={this.props.onChangeFile}
          type='file'
          name='file'
          multiple={false}
        />
        <Button
          onClick={this.props.reset}
          color='secondary'
          type='reset'
          variant='contained'
          disabled={this.props.pristine || this.props.submitting}
        >
          reset
        </Button>
        <Button
          onClick={this.props.handleSubmit}
          color='primary'
          type='button'
          variant='contained'
          disabled={this.props.pristine}
        >
          submit
        </Button>
      </StyledForm>
    );
  }
}

interface IFormFields {
  item: string;
  word: string;
  desc: string;
}

const validation = (values: IFormFields) => {
  const err = {} as IFormFields;
  if (!values.word) {
    err.word = 'a';
  }
  return err;
};

export default (props: any) =>
  reduxForm({
    form: 'addItemForm',
    validate: validation,
    ...props,
  })(AddItem);

const StyledForm = styled.form`
  display: inline-flex;
  flex-direction: column;
  justify-content: space-around;
  // align-items: center;
  height: 100%;
  width: 100%;
`;

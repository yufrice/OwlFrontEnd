import Button from '@material-ui/core/Button';
import Paper, { PaperProps } from '@material-ui/core/Paper';
import * as React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import styled from 'styled-components';

import { TextField } from '@/components/Atoms';

interface IProps {
  onChangeFile: any;
}

class AddItem extends React.PureComponent<InjectedFormProps<any> & IProps> {
  public render() {
    return (
      <StyledPaper>
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
            accept='image/*'
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
      </StyledPaper>
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
  justify-content: space-between;
  height: 300px;
  width: 100%;
`;

const StyledPaper = styled(Paper as React.SFC<PaperProps>)`
  padding: 50px;
  margin: 10px;
  width: 400px;
`;

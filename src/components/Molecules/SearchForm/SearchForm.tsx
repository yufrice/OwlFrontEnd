import { TextField } from '@/components/Atoms';
import Button, { ButtonProps } from '@material-ui/core/Button';
import Paper, { PaperProps } from '@material-ui/core/Paper';
import Typographty, { TypographyProps } from '@material-ui/core/Typography';
import * as React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import styled from 'styled-components';

class SearchForm extends React.PureComponent<InjectedFormProps<any>> {
  public render() {
    return (
      <form>
        <StyledPaper>
          <StyledTypography variant={'h6'}>Search</StyledTypography>
          <StyledGridInput0>
            <Field
              name='word0'
              label='Word 0'
              component={TextField}
              type='search'
            />
          </StyledGridInput0>
          <StyledGridInput1>
            <Field
              name='word1'
              label='Word 1'
              component={TextField}
              type='search'
            />
          </StyledGridInput1>
          <StyledGridInput2>
            <Field
              name='word2'
              label='Word 2'
              component={TextField}
              type='search'
            />
          </StyledGridInput2>
          <StyledGridButton0
            color={'secondary'}
            onClick={this.props.reset}
            type='reset'
            disabled={this.props.pristine || this.props.submitting}
            variant={'contained'}
          >
            Clear
          </StyledGridButton0>
          <StyledGridButton1
            color={'primary'}
            onClick={this.props.handleSubmit}
            type='button'
            disabled={this.props.pristine}
            variant={'contained'}
          >
            Submit
          </StyledGridButton1>
        </StyledPaper>
      </form>
    );
  }
}

export default reduxForm({
  form: 'searchForm',
  initialValues: { word0: '' },
})(SearchForm);

const StyledPaper = styled(Paper as React.SFC<PaperProps>)`
  padding: 20px;
  width: 400px;
  display: grid;
  grid-gap: 10px 15px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 0.5fr 1fr 1fr 1fr 0.5fr 0.5fr;
  grid-template-areas:
    'Label Label . . .'
    '. Input0 Input0 Input0 .'
    '. Input1 Input1 Input1 .'
    '. Input2 Input2 Input2 .'
    '. . . . .'
    '. . . Button0 Button1';
`;

const StyledTypography = styled(Typographty as React.SFC<TypographyProps>)`
  grid-area: Label;
`;

const StyledGridInput0 = styled.div`
  grid-area: Input0;
`;

const StyledGridInput1 = styled.div`
  grid-area: Input1;
`;

const StyledGridInput2 = styled.div`
  grid-area: Input2;
`;

const StyledGridButton0 = styled(Button as React.SFC<ButtonProps>)`
  grid-area: Button0;
`;

const StyledGridButton1 = styled(Button as React.SFC<ButtonProps>)`
  grid-area: Button1;
`;

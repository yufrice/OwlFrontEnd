import Button, { ButtonProps } from '@material-ui/core/Button';
import Paper, { PaperProps } from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typographty, { TypographyProps } from '@material-ui/core/Typography';
import * as React from 'react';
import styled from 'styled-components';

export class SearchForm extends React.PureComponent<any> {
  public render() {
    return (
      <form>
        <StyledPaper>
          <StyledTypography variant={'h6'}>Search</StyledTypography>
          <StyledGridInput0>
            <TextField
              label={'word1'}
              name={'word0'}
              key={'word0'}
              fullWidth={true}
              type='search'
              value={this.props.inputs.input0}
              onChange={this.props.changeForm}
            />
          </StyledGridInput0>
          <StyledGridInput1>
            <TextField
              label={'word2'}
              name={'word1'}
              key={'word1'}
              fullWidth={true}
              type='search'
              value={this.props.inputs.input1}
              onChange={this.props.changeForm}
            />
          </StyledGridInput1>
          <StyledGridInput2>
            <TextField
              label={'word3'}
              name={'word2'}
              key={'word2'}
              fullWidth={true}
              type='search'
              value={this.props.inputs.input2}
              onChange={this.props.changeForm}
            />
          </StyledGridInput2>
          <StyledGridButton0
            color={'secondary'}
            onClick={this.props.initForm}
            type='reset'
            variant={'contained'}
          >
            Clear
          </StyledGridButton0>
          <StyledGridButton1
            color={'primary'}
            onClick={this.props.submitSearch}
            type='button'
            variant={'contained'}
          >
            Submit
          </StyledGridButton1>
        </StyledPaper>
      </form>
    );
  }
}

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

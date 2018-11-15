import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typographty from '@material-ui/core/Typography';
import * as React from 'react';
import styled from 'styled-components';


export const SearchForm: React.SFC<any> = (props) => (
    <StyledPaper>
        <StyledTypography variant={'h6'}>
            Search
        </StyledTypography>
        <StyledGridInput0>
            <TextField
                label={'word1'}
                name={'word0'}
                key={'word0'}
                fullWidth={true}
                value={props.inputs.input0}
                onChange={props.changeForm}
            />
        </StyledGridInput0>
        <StyledGridInput1>
            <TextField
                label={'word2'}
                name={'word1'}
                key={'word1'}
                fullWidth={true}
                value={props.inputs.input1}
                onChange={props.changeForm}
            />
        </StyledGridInput1>
        <StyledGridInput2>
            <TextField
                label={'word3'}
                name={'word2'}
                key={'word2'}
                fullWidth={true}
                value={props.inputs.input2}
                onChange={props.changeForm}
            />
        </StyledGridInput2>
                <StyledGridButton0
                    color={'secondary'}
                    onClick={props.initForm}
                    variant={'contained'}
                >
                    Clear
                </StyledGridButton0>
                <StyledGridButton1
                    color={'primary'}
                    onClick={props.submitSearch}
                    variant={'contained'}
                >
                    Submit
                </StyledGridButton1>
    </StyledPaper>
);

const StyledPaper = styled(Paper)`
    padding: 20px;
    width: 400px;
    display: grid;
    grid-gap: 10px 15px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 0.5fr 1fr 1fr 1fr 0.5fr;
    grid-template-areas: "Label Label . . ." ". Input0 Input0 Input0 ." ". Input1 Input1 Input1 ." ". Input2 Input2 Input2 ." ". . . Button0 Button1";
`;

const StyledTypography = styled(Typographty)`
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

const StyledGridButton0 = styled(Button)`
    grid-area: Button0;
`;

const StyledGridButton1 = styled(Button)`
    grid-area: Button1;
`;

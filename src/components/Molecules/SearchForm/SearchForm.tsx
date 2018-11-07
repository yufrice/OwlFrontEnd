import Paper from '@material-ui/core/Paper';
import styled from "styled-components"
import Grid from '@material-ui/core/Grid';
import Typographty from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import * as React from 'react';

import { IProps } from './type';

export const SearchForm: React.SFC<IProps> = (props) => (
    <StyledPaper>
        <Typographty variant={'h6'}>
            Search
        </Typographty>
        <Grid
            container={true}
            direction={'column'}
            spacing={24}
        >
            <Grid item={true}>
                <TextField
                    label={'word1'}
                    fullWidth={true}
                />
            </Grid>
            <Grid item={true}>
                <TextField
                    label={'word2'}
                    fullWidth={true}
                />
            </Grid>
            <Grid item={true}>
                <TextField
                    label={'word3'}
                    fullWidth={true}
                />
            </Grid>
            <Grid item={true}>
                <Button
                    color={'secondary'}
                    onClick={clearForm}
                >
                    Clear
                </Button>
                <Button
                    color={'primary'}
                    onClick={clearForm}
                >
                    Submit
                </Button>
            </Grid>
        </Grid>
    </StyledPaper>
);

const clearForm = () => {
    console.log('');
};

const StyledPaper = styled(Paper)`
    padding: 50px;
    width: 400px;
`;

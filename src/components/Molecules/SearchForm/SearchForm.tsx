import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typographty from '@material-ui/core/Typography';
import * as React from 'react';
import styled from "styled-components"

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
            <Grid item={true} container={true} justify={'flex-end'}>
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
    return null;
};

const StyledPaper = styled(Paper)`
    padding: 50px;
    width: 400px;
`;

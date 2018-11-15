import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import styled from 'styled-components';

import { IProps } from './type';

export const ItemCard: React.SFC<IProps> = (props) => (
    <StyledItemCard>
        <StyledCardImg src={props.cardImg}/>
        <StyledContent container={true} spacing={16}>
            <Grid item={true}>
                <Typography variant={'h6'}>
                    {props.title}
                </Typography>
            </Grid>
            <Grid item={true} xs={12}>
                <Divider/>
            </Grid>
            <Grid item={true} xs={12}>
                <Grid container={true} justify={'flex-end'}>
                    <Button
                        onClick={props.onClick}
                        color={'primary'}
                        variant={'text'}
                    >
                        About
                    </Button>
                </Grid>
            </Grid>
        </StyledContent>
    </StyledItemCard>
);

const StyledItemCard = styled.div`
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 5px #ccc;
    display: inline-block;
    margin: 10px 10px;
    min-height: 60px;
    width: 250px;
`;

const StyledContent = styled(Grid)`
    padding: 20px;
`;

const StyledCardImg = styled.img`
    border-radius: 5px 5px 0 0;
    object-fit: cover;
    height: 200px;
    width: 250px;
`;

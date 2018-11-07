import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import styled from 'styled-components';

import { Button } from '@/components/Atoms';
import { IProps } from './type';

export class ItemCard extends React.Component<IProps, {}> {
    public static defaultProps: Partial<IProps> = {
        class: '',
    };

    public render() {
        return (
            <StyledItemCard>
                <StyledCardImg src={this.props.cardImg}/>
                <StyledCardContent>
                    <Typography variant={'h6'}>
                        {this.props.title}
                    </Typography>
                    <Typography variant={'body2'}>
                        duMMy text
                        duMMy text
                        duMMy text
                        duMMy text
                        duMMy text
                    </Typography>
                    <Button
                        child={'About'}
                        onClick={this.props.actions}
                        color={'primary'}
                        variant={'flat'}
                    />
                </StyledCardContent>
            </StyledItemCard>
        );
    };
};

const StyledItemCard = styled.div`
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 5px #ccc;
    display: inline-block;
    margin: 30px auto;
    width: 300px;
`;

const StyledCardContent = styled.div`
    padding: 20px;
`;

const StyledCardImg = styled.img`
    border-radius: 5px 5px 0 0;
    max-width: 100%;
    height: auto;
`;

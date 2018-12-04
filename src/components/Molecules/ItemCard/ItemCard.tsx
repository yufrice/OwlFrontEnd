import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grid, { GridProps } from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import styled from 'styled-components';

import { IProps } from './type';

export class ItemCard extends React.PureComponent<IProps> {
  public render() {
    return (
      <StyledItemCard>
        <StyledCardImg src={this.props.image} />
        <StyledContent container={true} spacing={16}>
          <Grid item={true}>
            <Typography color='textPrimary' variant={'h6'}>
              {this.props.title}
            </Typography>
            <Typography color='textPrimary'>{this.props.body}</Typography>
          </Grid>
          <Grid item={true} xs={12}>
            <Divider />
          </Grid>
          <Grid item={true} xs={12}>
            <Grid container={true} justify={'flex-end'}>
              <Button
                onClick={this.props.onClick}
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
  }
}

const StyledItemCard = styled.div`
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px #ccc;
  display: inline-block;
  margin: 10px 10px;
  min-height: 60px;
  width: 250px;
`;

const StyledContent = styled(Grid as React.SFC<GridProps>)`
  padding: 20px;
`;

const StyledCardImg = styled.img`
  border-radius: 5px 5px 0 0;
  object-fit: cover;
  height: 200px;
  width: 250px;
`;

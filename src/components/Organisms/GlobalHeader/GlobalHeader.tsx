import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import * as React from 'react';
import styled from 'styled-components';

import { Tabs } from '@/components/Molecules';
import { IProps } from './type';

export class GlobalHeader extends React.PureComponent<IProps> {
  public render() {
    return (
      <StyledHeader>
        <AppBar position='absolute' color='default'>
          <Toolbar>
            <Title variant={'h6'} color={'textPrimary'}>
              TITLE
            </Title>
            <Button onClick={this.props.logoutHandler}>LogOut</Button>
          </Toolbar>
          <Tabs tabIndex={this.props.tabIndex} onChange={this.props.onChange} />
        </AppBar>
      </StyledHeader>
    );
  }
}

const StyledHeader = styled.div`
  height: 150px;
  width: 100%;
`;

const Title = styled(Typography as React.SFC<TypographyProps>)`
  flex-grow: 1;
  color: white;
`;

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import * as React from 'react';
import styled from 'styled-components';

import { IconButton, Modal, Tabs } from '@/components/Molecules';
import { ConfigView } from '@/components/Organisms/ConfigView';
import { IProps } from './type';

export class GlobalHeader extends React.PureComponent<IProps> {
  public render() {
    return (
      <StyledHeader>
        <AppBar position='absolute' color='default'>
          <Toolbar>
            <Title variant={'h6'} color={'inherit'}>
              TITLE
            </Title>
            <Button onClick={this.props.logoutHandler}>LogOut</Button>
            <IconButton onClick={this.props.onClick}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
          <Tabs tabIndex={this.props.tabIndex} onChange={this.props.onChange} />
        </AppBar>
        <Modal
          open={this.props.configActive}
          onClose={this.props.onClose}
          size={[50, 50]}
          child={<ConfigView />}
        />
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

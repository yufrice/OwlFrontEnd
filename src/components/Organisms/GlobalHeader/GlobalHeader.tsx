import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import * as React from 'react';
import styled from "styled-components"

import { IconButton, Modal } from '@/components/Molecules'
import { ConfigView } from '@/components/Organisms/ConfigView';
import { IProps } from './type';


export const GlobalHeader: React.SFC<IProps> = (props) => (
    <StyledHeader>
        <AppBar
            position='fixed'
            color='default'
        >
            <Toolbar>
                <Title
                    variant={'h6'}
                    color={'inherit'}
                >
                    TITLE
                </Title>
                <IconButton
                    onClick={props.onClick}
                >
                    <MenuIcon/>
                </IconButton>
            </Toolbar>
            <Tabs
                value={props.tabIndex}
                onChange={props.onChange}
            >
                <Tab label={'Search'}/>
                <Tab label={'Edit'}/>
                <Tab label={'Logout'}/>
            </Tabs>
        </AppBar>
        <Modal
            open={props.configActive}
            onClose={props.onClose}
            child={<ConfigView/>}
        />
    </StyledHeader>
);

GlobalHeader.defaultProps = {
    tabIndex: 0,
    configActive: false,
};

const StyledHeader = styled.div`
    flex-grow: 1;
    height: 160px;
`;

const Title = styled(Typography)`
    flex-grow: 1;
    color: white;
`;
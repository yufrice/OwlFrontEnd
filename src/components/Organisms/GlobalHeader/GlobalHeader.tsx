import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

import { IconButton, Modal } from '@/components/Molecules'
import { ConfigView } from '@/components/Organisms/ConfigView';
import { IProps } from './type';


export const GlobalHeader: React.SFC<IProps> = (props) => (
    <StyledHeader>
        <AppBar
            position='absolute'
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
            <StyledTabs
                value={props.tabIndex}
                onChange={props.onChange}
                fullWidth={true}
            >
                <Tab key={'Search'}
                     label={'Search'}
                     component={Link}
                     {...{ to: '/'} as any}
                />
                <Tab
                    key={'Edit'}
                    label={'Edit'}
                    component={Link}
                    {...{ to: '/edit'} as any}
                />
                <Tab
                    key={'Debug'}
                    label={'Debug'}
                    component={Link}
                    {...{ to: '/debug'} as any}
                />
            </StyledTabs>
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
    height: 150px;
    width: 100%;
`;

const StyledTabs = styled(Tabs)`
    padding: 0 10px;
`;

const Title = styled(Typography)`
    flex-grow: 1;
    color: white;
`;

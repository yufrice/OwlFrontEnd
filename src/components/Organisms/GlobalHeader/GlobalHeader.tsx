import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import * as React from 'react';
import styled from "styled-components"

import { IconButton, Modal } from '@/components/Molecules'
import { IProps, IState } from './type';


export class GlobalHeader extends React.Component<IProps, IState> {

    public static defaultProps: Partial<IProps> = {
        class: '',
        color: 'default',
        position: 'fixed',
    };

    constructor(props: IProps) {
        super(props);

        this.state = {
            configOpen: false,
            tabIndex: 0,
        };
    };

    public render() {
        return (
            <StyledHeader>
                <AppBar
                    className={this.props.class}
                    position={this.props.position}
                    color={this.props.color}
                >
                    <Toolbar>
                        <Title
                            variant={'title'}
                            color={'inherit'}
                         >
                            TITLE
                        </Title>
                        <IconButton
                            onClick={this.handleOpenToggle}
                        >
                            <MenuIcon/>
                        </IconButton>
                    </Toolbar>
                    <Tabs
                        value={this.state.tabIndex}
                        onChange={this.handleTabChange}
                    >
                        <Tab label={'Search'}/>
                        <Tab label={'Config'}/>
                        <Tab label={'Login'}/>
                    </Tabs>
                </AppBar>
                <Modal
                    title={'Config'}
                    body={'body'}
                    open={this.state.configOpen}
                    onClose={this.closeHandler}
                    size={[80, 80]}
                />
            </StyledHeader>
        );
    };

    private handleOpenToggle = () => {
        this.setState({ configOpen: true });
    };

    private closeHandler = () => {
        this.setState({ configOpen: false });
    };

    private handleTabChange = (event: React.ChangeEvent, index: number) => {
        this.setState({ tabIndex: index });
    };

};

const StyledHeader = styled.div`
    flex-grow: 1;
`;

const Title = styled(Typography)`
    flex-grow: 1;
    color: white;
`;
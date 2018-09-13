import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import * as React from 'react';

import { IProps } from './type';

export class Bar extends React.Component<IProps, {}> {
    public static defaultProps: Partial<IProps> = {
        class: '',
        color: 'default',
        position: 'fixed',
    };

    public render() {
        return (
            <AppBar
                className={ this.props.class }
                position={ this.props.position }
                color={ this.props.color }
            >
                <Toolbar>
                    { this.props.child }
                </Toolbar>
            </AppBar>
        );
    };
};

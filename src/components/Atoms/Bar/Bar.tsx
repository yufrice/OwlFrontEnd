import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import * as React from 'react';
import * as Type from '../type';

interface IProps {
    child? : React.ReactNode,
    class?: string,
    color?: Type.Color,
    position?: Type.Position,
};

export class Bar extends React.Component<IProps, {}> {
    public static defaultProps: Partial<IProps> = {
        child: {},
        class: '',
        color: Type.Color.default,
        position: 'fixed',
    };

    public render() {
        return (
            <AppBar position={ this.props.position } color={ this.props.color }>
                <Toolbar/>
            </AppBar>
        );
    };
};

import _Typography from '@material-ui/core/Typography';
import * as React from 'react';

import { IProps } from "./type";

export class Typography extends React.Component<IProps, {}> {
    public static defaultProps: Partial<IProps> = {
        align: 'inherit',
        class: '',
        color: 'default',
        variant: 'body1',

    };

    public render() {
        return (
            <_Typography
                className={ this.props.class }
                align={ this.props.align }
                color={ this.props.color }
                variant = { this.props.variant }
            >
                { this.props.child }
            </_Typography>
        );
    };
};

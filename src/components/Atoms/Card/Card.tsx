import Crd from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import * as React from 'react';

import { IProps } from "./type";

export class Card extends React.Component<IProps, {}> {
    public static defaultProps: Partial<IProps> = {
        class: '',
        raised: false,
    };

    public render() {
        return (
            <Crd
                className = {this.props.class}
                raised = {this.props.raised}
            >
                <CardContent>
                    {this.props.child}
                </CardContent>
                <CardActions>
                    {this.props.childActions}
                </CardActions>
            </Crd>
        );
    };
};
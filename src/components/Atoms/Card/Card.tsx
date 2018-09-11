import Crd from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import * as React from 'react';

interface IProps {
    child: React.ReactNode,
    childActions?: React.ReactNode,
    class?: string,
    raised?: boolean,
};

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

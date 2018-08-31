import * as React from 'react';
import IconBtn from '@material-ui/core/IconButton';

interface IProps {
    icon: React.ReactNode,
};

export class IconButton extends React.Component<IProps, {}> {
    public render() {
        return (
            <IconBtn>
                {this.props.icon}
            </IconBtn>
        );
    };
};

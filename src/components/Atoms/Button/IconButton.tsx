import * as React from 'react';
import IconBtn from '@material-ui/core/IconButton';

interface IProps {
    child: React.ReactNode,
    class?: string,
};

export class IconButton extends React.Component<IProps, {}> {
    public static defaultProps: Partial<IProps> = {
        class: '',
    };

    public render() {
        return (
            <IconBtn className = {this.props.class}>
                {this.props.child}
            </IconBtn>
        );
    };
};

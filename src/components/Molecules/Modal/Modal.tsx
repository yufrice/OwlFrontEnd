import * as React from 'react';
import _Modal from '@material-ui/core/Modal';

import { IProps } from './type';

export class Modal extends React.Component<IProps, {}> {
    public static defaultProps: Partial<IProps> = {
        class: '',
    };
    
    public render() {
        return (
            <_Modal
                open = {this.props.open}
                onClose = {this.props.onClose}
            >
                <div>
                    {this.props.child}
                </div>
            </_Modal>
        );
    };
};

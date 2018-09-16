import TextField from '@material-ui/core/TextField';
import * as React from 'react';

import { IProps } from './type';

export class TextInput extends React.Component<IProps, {}> {
    public static defaultProps: Partial<IProps> = {
        className: '',
        value: 'string',
    };

    public render() {
        return (
            <TextField
                className = {this.props.className}
                value = {this.props.value}
            />
        );
    };
};

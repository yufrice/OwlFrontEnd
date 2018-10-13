import _Modal from '@material-ui/core/Modal';
import * as React from 'react';
import styled from 'styled-components';

import { Typography } from '@/components/Atoms/Typography';
import { IProps } from './type';

const StyledModal = styled(_Modal)`
    &&&{ top: 50%;
         left: 50%;
    };
    transform: translate(-50%, -50%);
`;

export class Modal extends React.Component<IProps, {}> {
    public static defaultProps: Partial<IProps> = {
        class: '',
    };

    public render() {
        return (
            <StyledModal
                open = {this.props.open}
                onClose = {this.props.onClose}
            >
                <div>
                    <Typography
                        child = {this.props.title}
                        variant = {'display1'}
                    />
                    <Typography
                        child = {this.props.subTitle}
                        variant = {'subheading'}
                    />
                </div>
            </StyledModal>
        );
    };
};

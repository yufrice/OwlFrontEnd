import _Modal from '@material-ui/core/Modal';
import * as React from 'react';
import styled from 'styled-components';

import { Typography } from '@/components/Atoms/Typography';
import { IProps } from './type';

const StyledModalContent= styled.div`
    top: 50%;
    bottom: 0;
    left: 50%;
    right: 0;
    position: fixed;
    transform: translate(-50%, -50%);
    background-color: white;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: 3%;
`;


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
                <StyledModalContent>
                    <Typography
                        child = {this.props.title}
                        align = {'center'}
                        variant = {'display1'}
                    />
                </StyledModalContent>
            </_Modal>
        );
    };
};

import _Modal from '@material-ui/core/Modal';
import * as React from 'react';
import styled from 'styled-components';

import { Typography } from '@/components/Atoms/Typography';
import { IProps } from './type';


export class Modal extends React.Component<IProps, {}> {
    public static defaultProps: Partial<IProps> = {
        class: '',
        size: [50, 50],
    };

    public render() {
        return (
            <_Modal
                open = {this.props.open}
                onClose = {this.props.onClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <StyledModalContent
                    size={this.props.size}
                >
                    <Typography
                        child = {this.props.title}
                        align = 'center'
                        variant = 'display1'
                        id = 'modal-title'
                    />
                    <Typography
                        child = {this.props.body}
                        variant = 'body1'
                        id = 'modal-description'
                    />
                    {this.props.action}
                </StyledModalContent>
            </_Modal>
        );
    };
};

const StyledModalContent = styled.div<{size: any}>`
    width: ${props=> props.size[0]}%;
    height: ${props => props.size[1]}%;
    position: fixed;
    padding: 30px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: 3%;
    z-index: 988;
`;

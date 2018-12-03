import _Modal from '@material-ui/core/Modal';
import Paper, { PaperProps } from '@material-ui/core/Paper';
import * as React from 'react';
import styled from 'styled-components';

import { IProps } from './type';

export class Modal extends React.Component<IProps> {
  public render() {
    return (
      <_Modal
        open={this.props.open!}
        onClose={this.props.onClose}
        aria-labelledby='modal-title'
        aria-describedby='modal-description'
        disableAutoFocus={false}
      >
        <StyledModalContent size={this.props.size!}>
          {this.props.child}
        </StyledModalContent>
      </_Modal>
    );
  }
}

const StyledModalContent = styled(Paper as React.SFC<PaperProps>)<{
  size: [number, number];
}>`
  width: ${(props) => props.size[0]}%;
  height: ${(props) => props.size[1]}%;
  position: fixed;
  display: grid;
  place-items: center center;
  padding: 30px;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  z-index: 988;
`;

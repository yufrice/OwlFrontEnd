import _Modal from '@material-ui/core/Modal';
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
      >
        <StyledModalContent size={this.props.size!}>
          {this.props.child}
        </StyledModalContent>
      </_Modal>
    );
  }
}

const StyledModalContent = styled.div<{ size: [number, number] }>`
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
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  z-index: 988;
`;

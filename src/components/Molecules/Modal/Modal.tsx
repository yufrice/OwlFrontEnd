import _Modal from '@material-ui/core/Modal';
import * as React from 'react';
import styled from 'styled-components';

import { IProps } from './type';

export const Modal: React.SFC<IProps> = (props) => (
  <_Modal
    open={props.open!}
    onClose={props.onClose}
    aria-labelledby='modal-title'
    aria-describedby='modal-description'
  >
    <StyledModalContent size={props.size!}>{props.child}</StyledModalContent>
  </_Modal>
);

Modal.defaultProps = {
  open: false,
  size: [50, 50],
};

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

import CircularProgress, {
  CircularProgressProps,
} from '@material-ui/core/CircularProgress';
import * as React from 'react';
import styled from 'styled-components';

interface IProps {
  active: boolean;
}
export const Loading: React.SFC<IProps> = (props: IProps) =>
  props.active ? <StyledProgress /> : null;

const StyledProgress = styled(CircularProgress as React.SFC<
  CircularProgressProps
>)`
  z-index: 1000;
  position: fixed;
  top: 50%;
  left: 50%;
`;

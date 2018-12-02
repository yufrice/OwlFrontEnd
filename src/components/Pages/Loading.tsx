import CircularProgress, {
  CircularProgressProps,
} from '@material-ui/core/CircularProgress';
import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { IRootState } from '@reducers';

interface IProps {
  active: boolean;
}
const Loading: React.SFC<IProps> = (props: IProps) =>
  props.active ? <StyledProgress /> : <React.Fragment />;

const StyledProgress = styled(CircularProgress as React.SFC<
  CircularProgressProps
>)`
  z-index: 1000;
  position: fixed;
  top: 50%;
  left: 50%;
`;

export default connect((state: IRootState) => ({
  active: state.app.loading,
}))(Loading);

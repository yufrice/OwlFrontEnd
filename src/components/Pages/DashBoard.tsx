import Button from '@material-ui/core/Button';
import Paper, { PaperProps } from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import styled from 'styled-components';

import * as App from '@/action/app';
import { IRootState } from '@reducers';

class DashBoard extends React.PureComponent<any> {
  // バージョンと死活管理
  public componentDidMount() {
    return;
  }
  public componentDidUpdate() {
    return;
  }

  public render() {
    return (
      <StyledDiv>
        <StyledPaper>
          <Typography variant='h5'> Server </Typography>
          {this.props.app.serverState.alive ? (
            <Typography color='primary'>Alive</Typography>
          ) : (
            <Typography color='secondary'>Dead</Typography>
          )}
          <Typography>Version: {this.props.app.serverState.version}</Typography>
        </StyledPaper>
        <StyledPaper>
          <Typography variant='h5'> WebAPP </Typography>
          <Typography>
            Local Version: {this.props.app.version.localVersion}
          </Typography>
          <Typography>
            Head Version: {this.props.app.version.headVersion}
          </Typography>
          <Button variant='contained'>Update</Button>
        </StyledPaper>
      </StyledDiv>
    );
  }
}

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const StyledPaper = styled(Paper as React.SFC<PaperProps>)`
  padding: 30px;
  margin: 10px;
`;

export default connect(
  (state: IRootState) => ({
    app: state.app,
  }),
  (dispatch: Dispatch) => bindActionCreators({ ...App.actions }, dispatch),
)(DashBoard);

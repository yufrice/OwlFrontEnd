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
    const serverStatus = this.props.app.serverState.alive ? (
      <Typography children={'Alive'} color='primary' />
    ) : (
      <Typography children={'Dead'} color='secondary' />
    );
    return (
      <StyledDiv>
        <StyledApp>
          <Typography color='textPrimary' variant='h5'>
            {' '}
            Server{' '}
          </Typography>
          <Typography color='textPrimary'>
            {serverStatus} Version: {this.props.app.serverState.version}
          </Typography>
        </StyledApp>
        <StyledServer>
          <Typography color='textPrimary' variant='h5'>
            {' '}
            WebAPP{' '}
          </Typography>
          <Typography color='textPrimary'>
            Local Version: {this.props.app.version.localVersion}
          </Typography>
          <Typography color='textPrimary'>
            Head Version: {this.props.app.version.headVersion}
          </Typography>
          <Button variant='contained'>Update</Button>
        </StyledServer>
        <StyledLog>
          <Typography color='textPrimary' variant='h5'>
            {' '}
            Log
          </Typography>
        </StyledLog>
      </StyledDiv>
    );
  }
}

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 0.5 1fr 1fr 0.5;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
  grid-template-areas:
    '. app server .'
    '. log log .';
`;

const StyledPaper = styled(Paper as React.SFC<PaperProps>)`
  padding: 30px;
`;

const StyledApp = styled(StyledPaper)`
  grid-area: app;
`;

const StyledServer = styled(StyledPaper)`
  grid-area: server;
`;

const StyledLog = styled(StyledPaper)`
  grid-area: log;
`;

export default connect(
  (state: IRootState) => ({
    app: state.app,
  }),
  (dispatch: Dispatch) => bindActionCreators({ ...App.actions }, dispatch),
)(DashBoard);

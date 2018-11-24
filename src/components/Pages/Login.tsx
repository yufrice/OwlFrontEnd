import { Button } from '@material-ui/core';
import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { bindActionCreators, Dispatch } from 'redux';

import * as Action from '@/action';
import * as AApp from '@/action/app';
import * as UI from '@/action/ui';
import { IRootState } from '@reducers';

type Props = IRootState & Action.Type;

class Login extends React.PureComponent<Props> {
  public render() {
    return this.props.app.authState ? (
      <Redirect to={'/'} />
    ) : (
      <div>
        <Button onClick={this.props.loginHandler}>login</Button>
      </div>
    );
  }
}

export default connect(
  (state: Props) => ({
    app: state.app,
    ui: state.ui,
  }),
  (dispatch: Dispatch) =>
    bindActionCreators({ ...AApp.actions, ...UI.actions }, dispatch),
)(Login);

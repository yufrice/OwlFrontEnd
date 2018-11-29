import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { bindActionCreators, Dispatch } from 'redux';

import * as Action from '@/action';
import * as AApp from '@/action/app';
import * as UI from '@/action/ui';
import { GlobalHeader } from '@/components/Organisms';
import { IRootState } from '@reducers';

type Props = IRootState & Action.Type;

/**
 *
 *
 * @class Auth
 * @extends {React.PureComponent<Props>}
 */
class Auth extends React.PureComponent<Props> {
  /**
   *  ToDo unsafe あとcheckSession()が発火しない
   */
  public componentWillMount() {
    return this.props.app.authState || this.props.checkSession();
  }

  /**
   *  ToDo unsafe
   *  本来ここでstoreを変更するのは違法
   */
  public componentWillUpdate() {
    return this.props.app.authState || this.props.checkSession();
  }

  public render() {
    return this.props.app.authState ? (
      <div>
        <GlobalHeader
          onClick={this.props.openConfigView}
          onClose={this.props.closeConfigView}
          onChange={this.props.changeTab}
          logoutHandler={this.props.logoutHandler}
          tabIndex={this.props.ui.tabIndex}
          configActive={this.props.ui.configActive}
        />
        <Route children={this.props.children} />
      </div>
    ) : (
      <Redirect to='/login' />
    );
  }
}

export default connect(
  (state: IRootState) => ({
    app: state.app,
    ui: state.ui,
  }),
  (dispatch: Dispatch) =>
    bindActionCreators({ ...AApp.actions, ...UI.actions }, dispatch),
)(Auth);

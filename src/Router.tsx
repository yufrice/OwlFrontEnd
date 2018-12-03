import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import * as React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import { darkTheme, theme } from '@/components/Atoms';
import {
  App,
  Auth,
  Config,
  DashBoard,
  Edit,
  Loading,
  Login,
} from '@/components/Pages';
import { IRootState } from '@reducers';

interface IProps {
  active: boolean;
}
/**
 *
 *
 * @class Router
 * @extends {React.Component}
 */
class Router extends React.Component<IProps> {
  public render() {
    return (
      <MuiThemeProvider theme={this.props.active ? darkTheme : theme}>
        <GlobalStyle theme={this.props.active} />
        <Switch>
          <Route path={'/login'} component={Login} />
          <Auth>
            <Switch>
              <Route path={'/edit'} component={Edit} />
              <Route path={'/dashboard'} component={DashBoard} />
              <Route path={'/config'} component={Config} />
              <Route exact={true} path={'/'} component={App} />
            </Switch>
          </Auth>
        </Switch>
        <Loading />
      </MuiThemeProvider>
    );
  }
}

const GlobalStyle = createGlobalStyle<{ theme: boolean }>`
    html {
        font-family: 'Noto Sans JP', sans-serif;
        background-color: ${(props) => (props.theme ? '#212121' : '#EEEEEE')};
        overflow-y: scroll;
        overflow-x: hidden;
        ::-webkit-scrollbar {
            width: 10px;
        }
        ::-webkit-scrollbar-track {
            background-color: rgba(0, 0, 0, 0);
        }
        ::-webkit-scrollbar-thumb {
            background-color: rgba(0, 0, 0, .05);
            border-radius: 16px;
            box-shadow: 0 0 0 4px slid rgba(255, 255, 255, .3);
        }
    }
`;

export default withRouter<any>(
  connect((state: IRootState) => ({
    active: state.app.config.theme,
  }))(Router),
);

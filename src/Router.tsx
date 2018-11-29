import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import { App, Auth, Debug, Edit, Login } from '@/components/Pages';
import './index.css';

/**
 *
 *
 * @class Router
 * @extends {React.PureComponent}
 */
class Router extends React.PureComponent {
  public render() {
    return (
      <div>
        <GlobalStyle />
        <Switch>
          <Route path={'/login'} component={Login} />
          <Auth>
            <Switch>
              <Route path={'/edit'} component={Edit} />
              <Route path={'/debug'} component={Debug} />
              <Route exact={true} path={'/'} component={App} />
            </Switch>
          </Auth>
        </Switch>
      </div>
    );
  }
}

const GlobalStyle = createGlobalStyle`
    html {
        font-family: 'Noto Sans JP', sans-serif;
        background-color: rgba(0, 0, 0, .05);
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

export default Router;

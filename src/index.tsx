import { MuiThemeProvider } from '@material-ui/core/styles';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import 'normalize.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import registerServiceWorker from './registerServiceWorker';

import { theme } from '@/components/Atoms';
import { api } from '@/middleware';
import rootReducer from '@/reducers';
import Router from './Router';

const logger = createLogger({
  collapsed: true,
  diff: true,
});
const history = createBrowserHistory();
const store = createStore(
  rootReducer(history),
  compose(
    applyMiddleware(routerMiddleware(history)),
    applyMiddleware(api),
    applyMiddleware(logger),
  ),
);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        {/*<ConnectedRouter history={history}>*/}
        <Router />
        {/*</ConnectedRouter>*/}
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root') as HTMLElement,
);

registerServiceWorker();

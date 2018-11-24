import { MuiThemeProvider } from '@material-ui/core/styles';
import {
  ConnectedRouter,
  connectRouter,
  routerMiddleware,
} from 'connected-react-router';
import { createBrowserHistory } from 'history';
import 'normalize.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { whyDidYouUpdate } from 'why-did-you-update';
import registerServiceWorker from './registerServiceWorker';

import { theme } from '@/components/Atoms';
import { api } from '@/middleware';
import rootReducer from '@/reducers';
import Router from './Router';

if (process.env.NODE_ENV === 'fullDebug') {
  whyDidYouUpdate(React);
}

const history = createBrowserHistory();
const middlewares = [routerMiddleware(history), api];
if (process.env.NODE_ENV !== 'production') {
  const logger = createLogger({
    collapsed: true,
    diff: true,
  });
  middlewares.push(logger);
}
const store = createStore(
  connectRouter(history)(rootReducer),
  compose(
    applyMiddleware(...middlewares),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      {/* <BrowserRouter> */}
      <ConnectedRouter history={history}>
        <Router />
      </ConnectedRouter>
      {/* </BrowserRouter> */}
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root') as HTMLElement,
);

registerServiceWorker();

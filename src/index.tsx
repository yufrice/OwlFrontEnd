import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore, Store } from 'redux';
import { createLogger } from 'redux-logger';
import { whyDidYouUpdate } from 'why-did-you-update';
import registerServiceWorker from './registerServiceWorker';

import { api, auth } from '@/middleware';
import rootReducer from '@/reducers';
import Router from './Router';

import 'normalize.css';
import './index.css';

if (process.env.NODE_ENV === 'fullDebug') {
  whyDidYouUpdate(React);
}

const history = createBrowserHistory();
const middlewares = [routerMiddleware(history), api, auth];
if (process.env.NODE_ENV !== 'production') {
  const logger = createLogger({
    collapsed: true,
    diff: true,
  });
  middlewares.push(logger);
}
const store: Store = createStore(
  rootReducer(history),
  compose(
    applyMiddleware(...middlewares),
    process.env.NODE_ENV !== 'production'
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
          (window as any).__REDUX_DEVTOOLS_EXTENSION__()
      : undefined,
  ),
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement,
);

registerServiceWorker();

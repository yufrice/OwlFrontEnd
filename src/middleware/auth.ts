import { Dispatch, Middleware, MiddlewareAPI } from 'redux';

import { ActionType } from '@/action/app';
import * as API from './utils';

/**
 * 認証用の非同期処理
 * 何故かcheckSessionが発火してもauthが変更されない
 * ユーザ定義のthrowは適切なaction投げるようにして
 * DOM更新
 *
 * @param store
 */
export const auth: Middleware = (store: MiddlewareAPI) => (next: Dispatch) => (
  action,
) => {
  switch (action.type) {
    case ActionType.checkSession:
      if (localStorage.getItem('sessionID')) {
        action.payload.auth = true;
        return next(action);
      } else {
        return next(action);
      }
    case ActionType.login:
      API.postLogin({
        ident: store.getState().form.loginForm.values.username,
        password: store.getState().form.loginForm.values.password,
      })
        .then(API.statusCheck)
        .then((res) => {
          const token = res.headers.get('access_token');
          if (null !== token) {
            localStorage.setItem('sessionID', token);
            action.payload.auth = true;
            return next(action);
          } else {
            // login failed
            return next(action);
          }
        })
        .catch((err) => {
          // server timeout
          return next(action);
        });
      break;
    case ActionType.logout:
      localStorage.clear();
      break;
  }
  return next(action);
};

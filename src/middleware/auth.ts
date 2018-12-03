import { push } from 'connected-react-router';
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
    // state初期状態でのトークン確認
    // ToDo api問い合わせ
    case ActionType.checkSession:
      API.getLogin(localStorage.getItem('sessionID') || '')
        .then(API.statusCheck)
        .then((res) => {
          action.payload.auth = true;
          return next(action);
        });
      break;
    // アクセストークンをリクエストする
    case ActionType.login:
      // loading
      store.dispatch({ type: ActionType.loading });

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
    // サーバー側にセッション削除実装したら問い合わせるにする
    case ActionType.logout:
      next(action);
      store.dispatch(push('/login'));
      localStorage.clear();
      return action;
  }
  return next(action);
};

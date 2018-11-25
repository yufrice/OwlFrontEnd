import { ActionType } from '@/action/app';
import { Dispatch, Middleware, MiddlewareAPI } from 'redux';

export const auth: Middleware = (store: MiddlewareAPI) => (next: Dispatch) => (
  action,
) => {
  switch (action.type) {
    case ActionType.checkSession:
      if (sessionStorage.getItem('sessionID')) {
        action.payload.auth = true;
        console.log(action.payload);
        return next(action);
      } else {
        return next(action);
      }
    case ActionType.login:
      localStorage.setItem('sessionID', 'token');
      break;
    case ActionType.logout:
      localStorage.clear();
      break;
  }
  return next(action);
};

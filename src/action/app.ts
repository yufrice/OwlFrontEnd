import { Item } from '@models/app';
import { Action } from 'redux';
import * as AddItem from './app/addItem';
import * as Config from './app/config';

/**
 *
 *  エラー系のstateはdispatchの途中でエラーコードをthrowしてdom側で拾う感じになおす
 *  debugまわりもテストデータに移す
 *  formはsubmitまでredux-formで管理させて発火時にそこから呼び出すようにする
 *
 * @export
 * @enum {number}
 *
 */
export enum ActionType {
  error = 'ERROR',
  loading = 'LOADING',
  done = 'DONE',
  initForm = 'INIT_FORM',
  stateFound = 'STATE_FOUND',
  notFound = 'NOT_FOUND',
  changeForm = 'CHANGE_FROM',
  submitSearch = 'SUBMIT_SEARCH',
  invalidate = 'INVALIDATE',
  searchRequestGet = 'SEARCH_REQUEST_GET',
  searchRequestReceive = 'SEARCH_REQUEST_RECEIVE',
  login = 'LOGIN',
  logout = 'LOGOUT',
  checkSession = 'CHECK_SESSION',
}

interface IError extends Action {
  type: ActionType.error;
}

export const searchError = (): IError => ({
  type: ActionType.error,
});

interface ILoading extends Action {
  type: ActionType.loading;
}

export const loading = (): ILoading => ({
  type: ActionType.loading,
});

interface IDone extends Action {
  type: ActionType.done;
}

export const done = (): IDone => ({
  type: ActionType.done,
});

interface IInitForm extends Action {
  type: ActionType.initForm;
}

export const initForm = (): IInitForm => ({
  type: ActionType.initForm,
});

interface IStateFound extends Action {
  type: ActionType.stateFound;
}

export const stateFound = (): IStateFound => ({
  type: ActionType.stateFound,
});

interface INotFound extends Action {
  type: ActionType.notFound;
}

export const notFound = (): INotFound => ({
  type: ActionType.notFound,
});

interface IChangeForm extends Action {
  type: ActionType.changeForm;
  payload: {
    input: { name: string; value: string };
  };
}

export const changeForm = (
  event: React.ChangeEvent<HTMLInputElement>,
): IChangeForm => {
  return {
    type: ActionType.changeForm,
    payload: {
      input: { name: event.target.name, value: event.target.value },
    },
  };
};

interface ISubmitSearch extends Action {
  type: ActionType.submitSearch;
}

export const submitSearch = (): ISubmitSearch => ({
  type: ActionType.submitSearch,
});

interface IInvalidate extends Action {
  type: ActionType.invalidate;
}

export const invalidate = (): IInvalidate => ({
  type: ActionType.invalidate,
});

interface ISearchRequestGet extends Action {
  type: ActionType.searchRequestGet;
  meta: {
    inputs: Array<{}>;
    word: string;
  };
}

export const searchRequestGet = (
  ipts: Array<{}>,
  wrd: string,
): ISearchRequestGet => {
  return {
    type: ActionType.searchRequestGet,
    meta: {
      inputs: ipts,
      word: wrd,
    },
  };
};

interface ISearchRequestReceive extends Action {
  type: ActionType.searchRequestReceive;
  payload: {
    items: Item[];
  };
  meta: {
    result: Array<{}>;
  };
}

export const searchRequestReceive = (
  res: Array<{}>,
): ISearchRequestReceive => ({
  type: ActionType.searchRequestReceive,
  payload: {
    items: [],
  },
  meta: {
    result: res,
  },
});

interface ILogin extends Action {
  type: ActionType.login;
  payload: {
    auth: boolean;
  };
}

export const loginHandler = (): ILogin => ({
  type: ActionType.login,
  payload: {
    auth: false,
  },
});

interface ILogout extends Action {
  type: ActionType.logout;
}

export const logoutHandler = (): ILogout => ({
  type: ActionType.logout,
});

interface ICheckSession extends Action {
  type: ActionType.checkSession;
  payload: {
    auth: boolean;
  };
}

export const checkSession = (): ICheckSession => ({
  type: ActionType.checkSession,
  payload: {
    auth: false,
  },
});

export type Type =
  | IError
  | ILoading
  | IDone
  | IInitForm
  | IStateFound
  | INotFound
  | IChangeForm
  | ISubmitSearch
  | IInvalidate
  | ISearchRequestGet
  | ISearchRequestReceive
  | ILogin
  | ILogout
  | ICheckSession
  | AddItem.Type
  | Config.Type;

export const actions = Object.assign(
  {
    searchError,
    loading,
    done,
    initForm,
    stateFound,
    notFound,
    changeForm,
    submitSearch,
    invalidate,
    searchRequestGet,
    searchRequestReceive,
    loginHandler,
    logoutHandler,
    checkSession,
  },
  AddItem.actions,
  Config.actions,
);

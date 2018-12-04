import { Dispatch, Middleware, MiddlewareAPI } from 'redux';
import { SubmissionError } from 'redux-form';

import {
  ActionType,
  searchRequestGet,
  searchRequestReceive,
} from '@/action/app';
import * as AddItem from '@/action/app/addItem';
import { closeAddItem } from '@/action/ui';
import * as API from './utils';

/**
 * 認証以外の非同期処理
 * 混沌としてるのでテストかく
 * @param store
 */
export const api: Middleware = (store: MiddlewareAPI) => (next: Dispatch) => (
  action,
) => {
  switch (action.type) {
    // input type=file で発火 メモリには乗らない
    case AddItem.ActionType.inputFile:
      if (null !== action.meta.input.target) {
        action.payload.file = action.meta.input.target.files[0];
      }
      return next(action);
    // アイテム送信 画像はここでメモリにのる
    case AddItem.ActionType.submit:
      store.dispatch({ type: ActionType.loading });
      try {
        const file = store.getState().app.addItem.rawFile;
        API.parseFile(file).then((b6) => {
          const strs = b6.split(',');
          action.meta.file = {
            name: store.getState().form.addItemForm.values.item,
            word: store.getState().form.addItemForm.values.word,
            file: strs[1],
            format: API.parseFormat(strs[0]),
            desc: store.getState().form.addItemForm.values.desc,
          };
          const token = localStorage.getItem('sessionID') || '';
          API.postItem(token, action.meta.file)
            .then(API.statusCheck)
            .then(() => {
              store.dispatch({ type: ActionType.done });
              store.dispatch(closeAddItem());
            });
          return next(action);
        });
      } catch (err) {
        store.dispatch({ type: ActionType.done });
        throw new SubmissionError(err);
      }
      break;
    // item 検索の最終処理
    case ActionType.searchRequestReceive:
      action.payload.items = action.meta.result;
      next({ type: ActionType.stateFound });
      return next(action);
    //  get vectorをパースして検索クエリ
    case ActionType.searchRequestGet:
      const params = new URLSearchParams();
      [action.meta.word]
        .concat(action.meta.inputs)
        .slice(0, store.getState().app.config.searchLimit)
        .map((str: string) => params.append('search', str));
      API.getItem(params)
        .then(API.statusCheck)
        .then((res) => res.json())
        .then((res) => {
          if (0 === res.length) {
            return next({ type: ActionType.notFound });
          } else {
            store.dispatch(searchRequestReceive(res));
            return action;
          }
        })
        .catch((err) => {
          console.log(err);
          return next({ type: ActionType.error });
        });

      return next(action);
    // 検索ボタンからの発火
    case ActionType.submitSearch:
      API.getVector(store.getState().form.searchForm.values.word0)
        .then((res) => API.statusCheck(res))
        .then((res) => res.json())
        .then((res) => {
          if (0 === res.result.length) {
            store.dispatch(
              searchRequestGet(
                [],
                store.getState().form.searchForm.values.word0,
              ),
            );
          } else {
            store.dispatch(
              searchRequestGet(
                res.result,
                store.getState().form.searchForm.values.word0,
              ),
            );
            return action;
          }
        })
        .catch((err) => {
          console.log(err);
          return next({ type: ActionType.error });
        });
  }
  return next(action);
};

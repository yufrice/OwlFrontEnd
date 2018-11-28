import { Seq } from 'immutable';
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

export const api: Middleware = (store: MiddlewareAPI) => (next: Dispatch) => (
  action,
) => {
  switch (action.type) {
    case AddItem.ActionType.inputFile:
      if (null !== action.meta.input.target) {
        action.payload.file = action.meta.input.target.files[0];
      }
      return next(action);
    case AddItem.ActionType.submit:
      try {
        const file = store.getState().app.addItem.rawFile;
        API.parseFile(file).then((b6) => {
          const strs = b6.split(',');
          action.meta.file.file = strs[1];
          action.meta.file.format = API.parseFormat(strs[0]);
          action.meta.file.name = store.getState().form.addItemForm.values.item;
          action.meta.file.word = store.getState().form.addItemForm.values.word;
          action.meta.file.desc = store.getState().form.addItemForm.values.desc;
          const token = localStorage.getItem('sessionID') || '';
          API.postItem(token, action.meta.file)
            .then(API.statusCheck)
            .then(() => store.dispatch(closeAddItem()));
          return next(action);
        });
      } catch (err) {
        throw new SubmissionError(err);
      }
      break;
    case ActionType.searchRequestReceive:
      action.payload.items = action.meta.result;
      next({ type: ActionType.stateFound });
      return next(action);
    case ActionType.searchRequestGet:
      const params = new URLSearchParams();
      Seq([{ word: action.meta.word }].concat(action.meta.inputs))
        .slice(0, 5)
        .map((str: any) => params.append('search', str.word))
        .toArray();
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
    case ActionType.submitSearch:
      API.getVector(store.getState().form.searchForm.values.word0)
        .then((res) => API.statusCheck(res))
        .then((res) => res.json())
        .then((res) => {
          if (0 === res.result.length) {
            return next({ type: ActionType.notFound });
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

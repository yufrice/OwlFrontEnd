import { ActionType, searchRequestGet, searchRequestReceive } from '@/action/app';
import { Seq } from 'immutable';
import fetch, {Response} from 'node-fetch';
import { Dispatch, Middleware, MiddlewareAPI } from 'redux';

export const api: Middleware = (store: MiddlewareAPI) =>
    (next: Dispatch) =>
        (action) => {
            switch (action.type) {
                case ActionType.searchRequestReceive:
                    action.payload.items = action.meta.result;
                    next({'type': ActionType.stateFound});
                    return next(action);
                case ActionType.searchRequestGet:
                    const params = new URLSearchParams();
                    Seq([{word: action.meta.word}].concat(action.meta.inputs))
                        .slice(0,5)
                        .map((str: any) => params.append('search', str.word))
                        .toArray();
                    getItem(params)
                        .then(statusCheck)
                        .then(res => res.json())
                        .then(res => {
                                if (0 === res.length) {
                                    return next({type: ActionType.notFound});
                                } else {
                                    store.dispatch(searchRequestReceive(res));
                                    return action;
                                };
                            },
                        )
                        .catch(err => {
                            console.log(err);
                            return next({type: ActionType.error});
                        });

                    return next(action);
                case ActionType.submitSearch:
                    if(store.getState().app.inputs.input0.length === 0) {
                        return next(action);
                    }
                    getVector(store.getState().app.inputs.input0)
                        .then(res => statusCheck(res))
                        .then(res => res.json())
                        .then(res => {
                                if (0 === res.result.length) {
                                    return next({type: ActionType.notFound});
                                } else {
                                    store.dispatch(searchRequestGet(res.result, store.getState().app.inputs.input0));
                                    return action;
                                }
                            },
                        )
                        .catch(err => {
                            console.log(err);
                            return next({type: ActionType.error});
                        })
                ;
            }
            return next(action);
        };

const getVector = async (query: string) => {
    const parameter =  '?search=' + query;
    return await fetch('/api/vector' + parameter);
};

const getItem = async (query: URLSearchParams) => {
    return await fetch('/api/item?'+query.toString());
};

const statusCheck = (res: Response) => {
    if (res.ok) {
        return res;
    } else {
        throw res.status;
    }
};

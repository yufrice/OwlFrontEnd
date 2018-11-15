import { Item } from '@models/app';
import { Action } from 'redux';

export enum ActionType {
    error = 'ERROR',
    debug = 'DEBUG',
    initForm = 'INIT_FORM',
    stateFound = 'STATE_FOUND',
    notFound = 'NOT_FOUND',
    changeForm = 'CHANGE_FROM',
    submitSearch = 'SUBMIT_SEARCH',
    invalidate = 'INVALIDATE',
    searchRequestGet = 'SEARCH_REQUEST_GET',
    searchRequestReceive = 'SEARCH_REQUEST_RECEIVE',
};

interface ITestFond extends Action {
    type: ActionType.debug,
};

export const testFond = (): ITestFond => ({
    type: ActionType.debug,
});

interface IError extends Action {
    type: ActionType.error,
};

export const searchError = (): IError => ({
    type: ActionType.error,
});

interface IInitForm extends Action {
    type: ActionType.initForm,
};

export const initForm  = (): IInitForm => ({
    type: ActionType.initForm,
});

interface IStateFound extends Action {
    type: ActionType.stateFound,
};

export const stateFound = (): IStateFound => ({
    type: ActionType.stateFound,
});

interface INotFound extends Action {
    type: ActionType.notFound,
};

export const notFound = (): INotFound => ({
    type: ActionType.notFound,
});

interface IChangeForm extends Action {
    type: ActionType.changeForm,
    payload: {
        input: {name: string, value: string},
    },
};

export const changeForm = (event: React.ChangeEvent<HTMLInputElement>): IChangeForm => {
    return {
        type: ActionType.changeForm,
        payload: {
            input: {name: event.target.name, value: event.target.value},
        },
    }};

interface ISubmitSearch extends Action {
    type: ActionType.submitSearch,
};

export const submitSearch = (): ISubmitSearch => ({
    type: ActionType.submitSearch,
});


interface IInvalidate extends Action {
    type: ActionType.invalidate,
};

export const invalidate = (): IInvalidate => ({
    type: ActionType.invalidate,
});

interface ISearchRequestGet extends Action {
    type: ActionType.searchRequestGet,
    meta: {
        inputs: Array<{}>,
        word: string,
    },
};

export const searchRequestGet = (ipts: Array<{}>, wrd: string): ISearchRequestGet => {
    return{
        type: ActionType.searchRequestGet,
        meta: {
            inputs: ipts,
            word: wrd,
        },
    }};

interface ISearchRequestReceive extends Action {
    type: ActionType.searchRequestReceive,
    payload: {
        items: Item[],
    },
    meta: {
        result: Array<{}>,
    },
};

export const searchRequestReceive = (res: Array<{}>): ISearchRequestReceive => ({
    type: ActionType.searchRequestReceive,
    payload: {
        items: [],
    },
    meta: {
        result: res,
    },
});


export type Type = ITestFond | IError | IInitForm | IStateFound | INotFound | IChangeForm | ISubmitSearch | IInvalidate | ISearchRequestGet | ISearchRequestReceive;

export const actions = {
    testFond,
    searchError,
    initForm,
    stateFound,
    notFound,
    changeForm,
    submitSearch,
    invalidate,
    searchRequestGet,
    searchRequestReceive,
};
import { combineReducers, createStore } from 'redux';

import * as UI from './ui';

export interface IRootState {
    ui: UI.IUIState,
};

export const rootReducer: (state: IRootState, action: any) =>
    IRootState = combineReducers({
        ui: UI.uiReducer,
    }as any);

export const generateStore = () => {
    return createStore(rootReducer);
};
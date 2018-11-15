import {IAppState } from '@models/app';
import { connectRouter, RouterState } from 'connected-react-router';
import { combineReducers } from 'redux';

import * as App from './app';
import * as UI from './ui';

export interface IRootState {
    app: IAppState,
    ui: UI.IUIState,
    router: RouterState,
};

export default (history: any) => combineReducers({
        app: App.appReducer,
        ui: UI.uiReducer,
        route: connectRouter(history),
    }as any);


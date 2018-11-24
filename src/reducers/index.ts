import { IAppState } from '@models/app';
import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import * as App from './app';
import * as UI from './ui';

export interface IRootState {
  app: IAppState;
  ui: UI.IUIState;
}

export default combineReducers({
  app: App.appReducer,
  ui: UI.uiReducer,
  form: reduxFormReducer,
} as any);

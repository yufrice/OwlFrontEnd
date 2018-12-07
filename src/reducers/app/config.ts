import { Type } from '@/action/app';
import { ActionType } from '@/action/app/config';
import * as Model from '@models/app';

export const initConfig: Model.IConfig = {
  searchLimit: 0.8,
  theme: false,
};

export const configReducer = (
  state: Model.IConfig = initConfig,
  action: Type,
): Model.IConfig => {
  switch (action.type) {
    case ActionType.changeLimit:
      return {
        ...state,
        searchLimit: action.payload.value,
      };
    case ActionType.changeTheme:
      return {
        ...state,
        theme: action.payload.theme,
      };
    default:
      return state;
  }
};

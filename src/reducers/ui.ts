import { ActionType, Type } from '@/action/ui';

export interface IUIState {
  configActive: boolean;
  addItemActive: boolean;
  tabIndex: number;
}

const initialState: IUIState = {
  configActive: false,
  addItemActive: false,
  tabIndex: 0,
};

export const uiReducer = (
  state: IUIState = initialState,
  action: Type,
): IUIState => {
  switch (action.type) {
    case ActionType.openConfigView:
      return {
        ...state,
        configActive: true,
      };
    case ActionType.closeConfigView:
      return {
        ...state,
        configActive: false,
      };
    case ActionType.openAddItem:
      return {
        ...state,
        addItemActive: true,
      };
    case ActionType.closeAddItem:
      return {
        ...state,
        addItemActive: false,
      };
    case ActionType.changeTab:
      return {
        ...state,
        tabIndex: action.payload.index,
      };
    default:
      return state;
  }
};

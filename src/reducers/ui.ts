import { ActionType, Type } from '@/action/ui';

export interface IUIState {
  addItemActive: boolean;
  tabIndex: number;
}

const initialState: IUIState = {
  addItemActive: false,
  tabIndex: 0,
};

export const uiReducer = (
  state: IUIState = initialState,
  action: Type,
): IUIState => {
  switch (action.type) {
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

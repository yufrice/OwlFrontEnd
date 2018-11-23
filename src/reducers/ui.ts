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
        configActive: true,
        addItemActive: state.addItemActive,
        tabIndex: state.tabIndex,
      };
    case ActionType.closeConfigView:
      return {
        configActive: false,
        addItemActive: state.addItemActive,
        tabIndex: state.tabIndex,
      };
    case ActionType.openAddItem:
      return {
        configActive: state.configActive,
        addItemActive: true,
        tabIndex: state.tabIndex,
      };
    case ActionType.closeAddItem:
      return {
        configActive: state.configActive,
        addItemActive: false,
        tabIndex: state.tabIndex,
      };
    case ActionType.changeTab:
      return {
        configActive: state.configActive,
        addItemActive: state.addItemActive,
        tabIndex: action.payload.index,
      };
    default:
      return state;
  }
};

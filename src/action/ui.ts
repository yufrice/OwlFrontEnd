import { Action } from 'redux';

export enum ActionType {
  openConfigView = 'OPEN_CONFIG_VIEW',
  closeConfigView = 'CLOSE_CONFIG_VIEW',
  openAddItem = 'OPEN_ADDITEM',
  closeAddItem = 'CLOSE_ADDITEM',
  changeTab = 'CHANGE_TAB',
}

interface IOpenConfigViewAction extends Action {
  type: ActionType.openConfigView;
}

const openConfigView = (): IOpenConfigViewAction => ({
  type: ActionType.openConfigView,
});

interface ICloseConfigViewAction extends Action {
  type: ActionType.closeConfigView;
}

const closeConfigView = (): ICloseConfigViewAction => ({
  type: ActionType.closeConfigView,
});

interface IOpenAddItem extends Action {
  type: ActionType.openAddItem;
}

const openAddItem = (): IOpenAddItem => ({
  type: ActionType.openAddItem,
});

interface ICloseAddItem extends Action {
  type: ActionType.closeAddItem;
}

const closeAddItem = (): ICloseAddItem => ({
  type: ActionType.closeAddItem,
});

interface IChangeTab extends Action {
  type: ActionType.changeTab;
  payload: {
    index: number;
  };
}

export const changeTab = (
  e: React.ChangeEvent<HTMLElement>,
  index: number,
): IChangeTab => ({
  type: ActionType.changeTab,
  payload: {
    index,
  },
});

export type Type =
  | IOpenConfigViewAction
  | ICloseConfigViewAction
  | IOpenAddItem
  | ICloseAddItem
  | IChangeTab;

export const actions = {
  openConfigView,
  closeConfigView,
  openAddItem,
  closeAddItem,
  changeTab,
};

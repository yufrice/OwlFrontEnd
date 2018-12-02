import { Action } from 'redux';

export enum ActionType {
  openAddItem = 'OPEN_ADDITEM',
  closeAddItem = 'CLOSE_ADDITEM',
  changeTab = 'CHANGE_TAB',
}

interface IOpenAddItem extends Action {
  type: ActionType.openAddItem;
}

const openAddItem = (): IOpenAddItem => ({
  type: ActionType.openAddItem,
});

interface ICloseAddItem extends Action {
  type: ActionType.closeAddItem;
}

export const closeAddItem = (): ICloseAddItem => ({
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

export type Type = IOpenAddItem | ICloseAddItem | IChangeTab;

export const actions = {
  openAddItem,
  closeAddItem,
  changeTab,
};

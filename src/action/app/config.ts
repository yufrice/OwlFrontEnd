import { Action } from 'redux';

export enum ActionType {
  changeLimit = 'CHANGE_LIMIT',
  changeTheme = 'CHANGE_THEME',
}

interface IChangeLimit extends Action {
  type: ActionType.changeLimit;
  payload: {
    value: number;
  };
}

export const changeLimit = (
  e: React.EventHandler<any>,
  val: number,
): IChangeLimit => {
  return { type: ActionType.changeLimit, payload: { value: val } };
};

interface IChangeTheme extends Action {
  type: ActionType.changeTheme;
  payload: {
    theme: boolean;
  };
}

export const changeTheme = (
  e: React.EventHandler<any>,
  active: boolean,
): IChangeTheme => ({
  type: ActionType.changeTheme,
  payload: {
    theme: active,
  },
});

export type Type = IChangeLimit | IChangeTheme;

export const actions = { changeLimit, changeTheme };

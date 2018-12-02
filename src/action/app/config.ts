import { Action } from 'redux';

export enum ActionType {
  changeLimit = 'CHANGE_LIMIT',
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

export type Type = IChangeLimit;

export const actions = { changeLimit };

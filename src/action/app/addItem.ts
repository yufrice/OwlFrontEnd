import { Action } from 'redux';

export enum ActionType {
  changeInput = 'CHANGE_INPUT',
}

interface IChangeInput extends Action {
  type: ActionType.changeInput;
  payload: {
    input: { name: string; value: string | File };
  };
}

export const changeInput = (
  event: React.ChangeEvent<HTMLInputElement>,
): IChangeInput => {
  return {
    type: ActionType.changeInput,
    payload: {
      input: { name: event.target.name, value: event.target.value },
    },
  };
};

export type Type = IChangeInput;

export const actions = { changeInput };

import { Action } from 'redux';

export enum ActionType {
  submit = 'SUBMIT',
}

interface ISubmit extends Action {
  type: ActionType.submit;
}

export const submit = (): ISubmit => {
  return {
    type: ActionType.submit,
  };
};

export type Type = ISubmit;

export const actions = { submit };

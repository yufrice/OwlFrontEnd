import * as Model from '@models/app';
import { Action } from 'redux';

export enum ActionType {
  submit = 'SUBMIT',
  inputFile = 'INPUT_FILE',
}

interface ISubmit extends Action {
  type: ActionType.submit;
  meta: {
    file: Model.ItemInput;
  };
}

export const submit = (): ISubmit => {
  return {
    type: ActionType.submit,
    meta: {
      file: Model.initItemInput,
    },
  };
};

interface IInputFile extends Action {
  type: ActionType.inputFile;
  payload: {
    file: File;
  };
  meta: {
    input: React.ChangeEvent<HTMLInputElement>;
  };
}

export const inputFile = (
  event: React.ChangeEvent<HTMLInputElement>,
): IInputFile => {
  return {
    type: ActionType.inputFile,
    payload: {
      file: new File([], ''),
    },
    meta: {
      input: event,
    },
  };
};

export type Type = ISubmit | IInputFile;

export const actions = { submit, inputFile };

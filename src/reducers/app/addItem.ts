import { Type } from '@/action/app';
import { ActionType } from '@/action/app/addItem';
import { IAddItemState, ItemInput } from '@models/app';

const initItemInput: ItemInput = {
  name: '',
  word: '',
  desc: '',
  file: '',
  format: '',
};

export const initialState: IAddItemState = {
  state: 'neutral',
  input: initItemInput,
};

export const addItemReducer = (
  state: IAddItemState = initialState,
  action: Type,
): IAddItemState => {
  switch (action.type) {
    case ActionType.submit:
    default:
      return state;
  }
};

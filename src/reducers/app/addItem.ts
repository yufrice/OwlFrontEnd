import { Type } from '@/action/app';
import { ActionType } from '@/action/app/addItem';
import { IAddItemState, ItemInput } from '@models/app';

const initItemInput: ItemInput = {
  name: '',
  word: '',
  desc: '',
  file: undefined,
};

export const initialState: IAddItemState = {
  input: initItemInput,
};

export const addItemReducer = (
  state: IAddItemState = initialState,
  action: Type,
): IAddItemState => {
  switch (action.type) {
    case ActionType.changeInput:
      const newInput = ((input: any) => {
        switch (input.name) {
          case 'name':
            return { ...state.input, name: input.value };
          case 'word':
            return { ...state.input, word: input.value };
          case 'desc':
            return { ...state.input, desc: input.value };
          case 'file':
            return { ...state.input, file: input.value };
          default:
            return state.input;
        }
      })(action.payload.input);
      return { ...state, input: newInput };
    default:
      return state;
  }
};

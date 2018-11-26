import { Type } from '@/action/app';
import { ActionType } from '@/action/app/addItem';
import { IAddItemState, initItemInput } from '@models/app';

export const initialState: IAddItemState = {
  state: 'neutral',
  input: initItemInput,
  rawFile: new File([], ''),
};

export const addItemReducer = (
  state: IAddItemState = initialState,
  action: Type,
): IAddItemState => {
  switch (action.type) {
    case ActionType.inputFile:
      return {
        ...state,
        rawFile: action.payload.file,
      };
    case ActionType.submit:
      return state;
    default:
      return state;
  }
};

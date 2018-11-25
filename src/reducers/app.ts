import { randomBytes } from 'crypto';

import { ActionType, Type } from '@/action/app';
import { IAppState, Inputs, Item } from '@models/app';
import * as AddItem from './app/addItem';

const initInput: Inputs = {
  input0: '',
  input1: '',
  input2: '',
};

const initialState: IAppState = {
  state: 'init',
  authState: false,
  inputs: initInput,
  addItem: AddItem.initialState,
  result: undefined,
};

export const appReducer = (
  state: IAppState = initialState,
  action: Type,
): IAppState => {
  switch (action.type) {
    case ActionType.debug:
      return {
        ...state,
        state: 'found',
        inputs: initInput,
        result: items(Math.floor(Math.random() * 20)),
      };
    case ActionType.error:
      return {
        ...state,
        state: 'error',
      };
    case ActionType.initForm:
      return {
        ...state,
        state: 'init',
        inputs: initInput,
        result: undefined,
      };
    case ActionType.stateFound:
      return {
        ...state,
        state: 'found',
      };
    case ActionType.notFound:
      return {
        ...state,
        state: 'notFound',
        result: undefined,
      };
    case ActionType.changeForm:
      const newInput = ((input: any) => {
        switch (input.name) {
          case 'word0':
            return {
              ...state.inputs,
              input0: input.value,
            };
          case 'word1':
            return {
              ...state.inputs,
              input1: input.value,
            };
          case 'word2':
            return {
              ...state.inputs,
              input2: input.value,
            };
          default:
            return state.inputs;
        }
      })(action.payload.input);
      return {
        ...state,
        inputs: newInput,
      };
    case ActionType.submitSearch:
      return state;
    case ActionType.searchRequestGet:
      return state;
    case ActionType.searchRequestReceive:
      return {
        ...state,
        result: action.payload.items,
      };
    case ActionType.login:
      return {
        ...state,
        authState: true,
      };
    case ActionType.logout:
      return {
        ...state,
        authState: false,
      };
    case ActionType.checkSession:
      console.log(action.payload.auth);
      return { ...state, authState: action.payload.auth };
    default:
      return {
        ...state,
        addItem: AddItem.addItemReducer(state.addItem, action),
      };
  }
};

const dummyImage = (size: [number, number]) =>
  'https://placehold.jp/' + size[0] + 'x' + size[1] + '.png';
const sizeSlide = Array.from(Array(10).keys()).map((n) => (n + 1) * 10 + 150);

const items: (n: number) => Item[] = (num: number) => {
  return Array.from(Array(num).keys()).map((n: number) => ({
    id: randomBytes(8).toString('hex'),
    name: 'ITEM' + n.toString(),
    desc: '',
    word: '',
    image: dummyImage([sizeSlide[n], sizeSlide[9 - n]]),
  }));
};

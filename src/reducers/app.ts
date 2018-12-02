import { ActionType, Type } from '@/action/app';
import * as Model from '@models/app';
import * as AddItem from './app/addItem';
import * as Config from './app/config';

const initInput: Model.Inputs = {
  input0: '',
  input1: '',
  input2: '',
};

const initServerState: Model.IServerState = {
  alive: false,
  version: '',
};

const initVersion: Model.IVersion = {
  localVersion: '',
  headVersion: '',
};

export const initialState: Model.IAppState = {
  state: 'init',
  config: Config.initConfig,
  serverState: initServerState,
  version: initVersion,
  loading: false,
  auth: false,
  inputs: initInput,
  addItem: AddItem.initialState,
  result: undefined,
};

export const appReducer = (
  state: Model.IAppState = initialState,
  action: Type,
): Model.IAppState => {
  switch (action.type) {
    case ActionType.error:
      return {
        ...state,
        state: 'error',
      };
    case ActionType.loading:
      return {
        ...state,
        loading: true,
      };
    case ActionType.done:
      return {
        ...state,
        loading: false,
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
        loading: false,
        auth: action.payload.auth,
      };
    case ActionType.logout:
      return {
        ...state,
        auth: false,
      };
    case ActionType.checkSession:
      return { ...state, auth: action.payload.auth };
    default:
      return {
        ...state,
        addItem: AddItem.addItemReducer(state.addItem, action),
        config: Config.configReducer(state.config, action),
      };
  }
};

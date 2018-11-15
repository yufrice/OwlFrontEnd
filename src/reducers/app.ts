import { ActionType, Type } from '@/action/app';
import {IAppState, Inputs,Item} from '@models/app';
import { randomBytes } from 'crypto';

const initInput: Inputs = {
    input0: '',
    input1: '',
    input2: '',
};

const initialState: IAppState = {
    state: 'init',
    inputs: initInput,
    result: undefined,
};

export const appReducer = (state: IAppState = initialState, action: Type): IAppState => {
    switch (action.type) {
        case ActionType.debug:
            return {state: 'found', inputs: initInput, result: items(Math.floor(Math.random() * 20))};
        case ActionType.error:
            return initialState;
        case ActionType.initForm:
            return {state: 'init', inputs: initInput, result: undefined};
        case ActionType.stateFound:
            return {state: 'found', inputs: state.inputs, result: state.result};
        case ActionType.notFound:
            return {state: 'notFound', inputs: state.inputs, result: undefined};
        case ActionType.changeForm:
            const newInput = ((input: any) => {
                switch (input.name) {
                    case 'word0':
                        return {
                            input0: input.value,
                            input1: state.inputs.input1,
                            input2: state.inputs.input2,
                        };
                    case 'word1':
                        return {
                            input0: state.inputs.input0,
                            input1: input.value,
                            input2: state.inputs.input2,
                        };
                    case 'word2':
                        return {
                            input0: state.inputs.input0,
                            input1: state.inputs.input1,
                            input2: input.value,
                        };
                    default:
                        return state.inputs;
                }
            })(action.payload.input);
            return {
                state: state.state,
                inputs: newInput,
                result: state.result,
            };
        case ActionType.submitSearch:
            return state;
        case ActionType.searchRequestGet:
            return state;
        case ActionType.searchRequestReceive:
            return {
                state: state.state,
                inputs: state.inputs,
                result: action.payload.items,
            };
        default:
            return state;
    };
};

const dummyImage = (size: [number, number]) => (
    'https://placehold.jp/'
    + size[0] + 'x' + size[1] + '.png'
);
const sizeSlide = Array.from(Array(10).keys())
    .map((n)=> (n+1) * 10 + 150);

const items: (n: number) => Item[]  = (num: number) => {
    return Array.from(Array(num).keys())
    .map((n: number) => ({
            id: randomBytes(8).toString('hex'),
            name: 'ITEM'+n.toString(),
            desc: '',
            word: '',
            image: dummyImage([sizeSlide[n], sizeSlide[9-n]]),
        }));
};

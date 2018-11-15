export interface IAppState  {
    state: 'init' | 'processing' | 'found' | 'notFound' | 'error',
    inputs: Inputs,
    result: Item[] | undefined,
};

export interface Inputs {
    input0: string,
    input1: string,
    input2: string,
};

export interface Item {
    id: string,
    name: string,
    desc: string,
    word: string,
    image: string,
};

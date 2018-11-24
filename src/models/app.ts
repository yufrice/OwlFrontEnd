export interface IAppState {
  state: 'init' | 'processing' | 'found' | 'notFound' | 'error';
  authState: boolean;
  inputs: Inputs;
  addItem: IAddItemState;
  result: Item[] | undefined;
}

export interface Inputs {
  input0: string;
  input1: string;
  input2: string;
}

export interface Item {
  id: string;
  name: string;
  desc: string;
  word: string;
  image: string;
}

export interface IAddItemState {
  input: ItemInput;
}

export interface ItemInput {
  name: string;
  word: string;
  desc: string;
  file: File | undefined;
}

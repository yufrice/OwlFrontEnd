import { Item } from '@models/app';

export interface IProps {
    items?: Item[],
    searchState?: SearchState,
};

type SearchState = 'init' | 'processing' | 'found' | 'notFound' | 'error';

export const isInit = (prop : any): prop is IProps =>
    prop.searchState === 'init';

export const isProcessing = (prop : any): prop is IProps =>
    prop.searchState === 'processing';

export const isFound = (prop : any): prop is IProps =>
    prop.searchState === 'found' && prop.items !== 'undefined';

export const isNotFound = (prop : any): prop is IProps =>
    prop.searchState === 'notFound';

export const isError = (prop : any): prop is IProps =>
    prop.searchState === 'error';


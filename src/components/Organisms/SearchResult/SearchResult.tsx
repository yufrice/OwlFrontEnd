import { ItemCard } from '@/components/Molecules';
import { Item } from '@models/app';
import Styled from 'styled-components';

import * as React from 'react';
import * as Type from './type';

export const SearchResult: React.SFC<Type.IProps> = (props: Type.IProps) => {
    const itemList = (item: Item) => {
        return <ItemCard
            key={item.id}
            title={item.name}
            image={item.image}
        />
    };
    if('found' === props.searchState) {
        return <StyledGrid>
            {props.items ? props.items.map(itemList) : null}
        </StyledGrid>;
    } else if('notFound' === props.searchState) {
        return <div> not found </div>
    } else if(Type.isProcessing(props.searchState)) {
        return <div> loading </div>
    } else if(Type.isError(props.searchState)) {
        return <div> error </div>
    } else if(Type.isInit(props.searchState)) {
        return null;
    };
    return null;
};

SearchResult.defaultProps = {
    items: [],
    searchState: 'init',
};

const StyledGrid = Styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 50px
`;

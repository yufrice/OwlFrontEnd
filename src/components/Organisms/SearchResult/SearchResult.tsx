import { ItemCard } from '@/components/Molecules';
import Grid from '@material-ui/core/Grid';

import * as React from 'react';
import * as Type from './type';

export const SearchResult: React.SFC<Type.IProps> = (props: Type.IProps) => {
    const itemList = (item: Type.Item) => {
        return <Grid item={true} key={item.name}>
            <ItemCard
                title={item.name}
                cardImg={item.imgSrc}
            />
        </Grid>
    };
    if(Type.isFound(props)) {
        return <Grid container={true} spacing={24}>
            {props.items ? props.items.map(itemList) : null}
        </Grid>;
    } else if(Type.isNotFound(props)) {
        return <div> not found </div>
    } else if(Type.isProcessing(props)) {
        return <div> loading </div>
    } else if(Type.isError(props)) {
        return <div> error </div>
    } else if(Type.isInit(props)) {
        return <div> init </div>
    };
    return null;
};

SearchResult.defaultProps = {
    items: [],
    searchState: 'init',
};

import Grid from '@material-ui/core/Grid';
import * as React from 'react';

import { ItemCard } from '@/components/Molecules';
import { IProps, Item } from './type';

export const SearchResult: React.SFC<IProps> = (props) => {
    const itemList = (item: Item) => {
        return <Grid item={true} key={item.name}>
            <ItemCard
                title={item.name}
                cardImg={item.imgSrc}
            />
        </Grid>
    };
    return props.items.length !== 0
        && <Grid container={true} spacing={24}>
            {props.items.map(itemList)}
           </Grid>
        || <div> 'not found' </div>;
};

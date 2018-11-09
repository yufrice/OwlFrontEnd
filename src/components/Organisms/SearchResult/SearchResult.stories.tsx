import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { SearchResult } from './SearchResult';
import { Item } from './type';


storiesOf('Organisms/SearchResult', module)
    .add('Result', () =>
        <SearchResult items={items}/>
    ).add('NotFound', () =>
        <SearchResult items={[]}/>
    );


const dummyImge = (size: [number, number]) => (
    'https://placehold.jp/'
    + size[0] + 'x' + size[1] + '.png'
);
const sizeSlide = Array.from(Array(10).keys())
    .map((n)=> (n+1) * 10 + 150);

const items: Item[]  = Array.from(Array(10).keys())
    .map((n: number) => (
        {
            name: 'ITEM'+n.toString(),
            imgSrc: dummyImge([sizeSlide[n], sizeSlide[9-n]]),
        }));

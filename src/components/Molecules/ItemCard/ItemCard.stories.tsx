import centered from '@storybook/addon-centered';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { ItemCard } from './ItemCard';

storiesOf('Molecules', module)
    .addDecorator(centered)
    .add('ItemCard', () =>
        <ItemCard
            title={'ItemCatd'}
            body={'dummyddummydummydummydummydummydummydummydummydummydummyummy'}
            image={demoImg}
        />
    );

const demoImg = 'https://pbs.twimg.com/media/DoWC48iUwAAnfj3.jpg';

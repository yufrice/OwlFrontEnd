import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { GlobalHeader } from './GlobalHeader';


storiesOf('Organisms', module)
    .add('GlobalHeader',
        () =>
            <GlobalHeader
                color={'default'}
            />
    );

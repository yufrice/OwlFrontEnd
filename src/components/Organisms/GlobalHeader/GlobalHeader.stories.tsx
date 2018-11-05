import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { GlobalHeader } from './GlobalHeader';


storiesOf('Organisms', module)
    .add('GlobalHeader',
        () =>
            <GlobalHeader
                color={'default'}
                onClick={action('clicked')}
            />
    );

import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Header } from './Header';


storiesOf('Organisms', module)
    .add('Header',
        () =>
            <Header
                color={'default'}
                onClick={action('clicked')}
            />
    );

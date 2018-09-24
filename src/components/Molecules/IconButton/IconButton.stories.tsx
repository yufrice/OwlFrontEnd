import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { IconButton } from '.';

storiesOf('Molecules', module)
    .addDecorator(centered)
    .add('IconButton',
        () =>
            <IconButton onClick={
                action('clicked')
            }/>
    );

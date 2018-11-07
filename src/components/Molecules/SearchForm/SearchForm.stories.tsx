import centered from '@storybook/addon-centered';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { SearchForm } from '.';


storiesOf('Molecules', module)
    .addDecorator(centered)
    .add('SearchForm',
        () =>
            <SearchForm/>
    );

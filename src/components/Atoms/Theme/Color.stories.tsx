import centered from '@storybook/addon-centered';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { GlobalHeader } from '../../Organisms/GlobalHeader';

storiesOf('Atoms/Color', module)
    .addDecorator(centered)
    .add('Primary', () =>
        <GlobalHeader
            color={ 'primary' }
            position={ 'static' }
        />
    )
    .add('Secondary', () =>
        <GlobalHeader
            color={ 'secondary' }
            position={ 'static' }
        />
    );

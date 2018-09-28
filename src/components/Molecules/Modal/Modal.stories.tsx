import centered from '@storybook/addon-centered';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Modal } from '.';

storiesOf('Molecules', module)
    .addDecorator(centered)
    .add('Modal',
        () =>
            <Modal
                child={'test'}
                open={true}
            />
    );


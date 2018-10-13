import centered from '@storybook/addon-centered';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Modal } from '.';

storiesOf('Molecules', module)
    .addDecorator(centered)
    .add('Modal',
        () =>
            <div>
                <Modal
                    title={'Title'}
                    subTitle={'SubTitle'}
                    open={true}
                />
            </div>
    );


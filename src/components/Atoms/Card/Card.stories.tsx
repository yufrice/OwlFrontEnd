import centered from '@storybook/addon-centered';
import { storiesOf } from "@storybook/react";

import * as React from 'react';

import { Card } from './Card';

storiesOf('Atoms', module)
    .addDecorator(centered)
    .add('Card', () =>
        <div style={{display: 'flex'}}>
            <Card child={''} />
            <Card
                child={''}
                raised={ true }
            />
        </div>
    );

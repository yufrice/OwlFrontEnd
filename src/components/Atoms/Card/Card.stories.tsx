import centered from '@storybook/addon-centered';
import { storiesOf } from "@storybook/react";

import * as React from 'react';

import { Card } from './Card';

storiesOf('Atoms', module)
    .addDecorator(centered)
    .add('Card', () =>
        <div style={{display: 'flex'}}>
            <Card child={<h1> Title </h1>} />
            <Card
                child={<h1> Raised </h1>}
                raised={ true }
            />
        </div>
    );

import centered from '@storybook/addon-centered';
import { storiesOf } from "@storybook/react";
import * as React from 'react';

import { Card } from './Card';

storiesOf('Atoms/Card', module)
    .addDecorator(centered)
    .add('Default', () =>
        <Card child={''} />
    )
    .add('Raised', () =>
         <Card
             child={''}
             raised={ true }
         />
    );

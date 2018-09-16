import centered from '@storybook/addon-centered';
import { storiesOf } from "@storybook/react";
import * as React from 'react';

import { TextInput } from './TextInput';

storiesOf('Atoms/Input', module)
    .addDecorator(centered)
    .add('Text', () =>
        <TextInput/>
);

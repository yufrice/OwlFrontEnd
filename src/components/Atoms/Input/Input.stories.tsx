import centered from '@storybook/addon-centered';
import { storiesOf } from "@storybook/react";
import * as React from 'react';

import { TextInput } from './TextInput';

storiesOf('Atoms/Input', module)
    .addDecorator(centered)
    .add('Text', () =>
        <div>
            <TextInput/>
            <TextInput label={'disable'} disabled={true} />
            <TextInput label={'error'} error={true} />
            <TextInput label={'password'} type={'password'} />
            <TextInput label={'required'} required={true} />
        </div>
);

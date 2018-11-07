import centered from '@storybook/addon-centered';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from "styled-components"

import { theme } from '.';

storiesOf('Atoms/Color', module)
    .addDecorator(centered)
    .add('Primary', () =>
        <ColorDisplay
            color={theme.palette.primary.main}/>
    )
    .add('Secondary', () =>
        <ColorDisplay
            color={theme.palette.secondary.main}/>
    );

const ColorDisplay = styled.div<{color: string}>`
    background: ${props => props.color};
    height: 100px;
    width: 100px;
`;

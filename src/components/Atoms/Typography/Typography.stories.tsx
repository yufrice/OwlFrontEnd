import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Typography } from "./Typography";

storiesOf('Atoms', module)
    .add('Typography',
        () =>
            <div>
                { ['display4',
                    'display3',
                    'display2',
                    'display1',
                ].map((str: any) =>
                    (<Typography child={str} variant={str}/>)) }
                <Typography
                    child='Headline'
                    variant='headline'
                />
                <Typography
                    child='Title'
                    variant='title'
                />
                <Typography
                    child='Subheading'
                    variant='subheading'
                />
            </div>
    );

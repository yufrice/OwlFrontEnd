import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Bar } from './Bar';


storiesOf('Atoms', module)
    .add('Bar',
       (() =>
            <div style={{display: 'flex'}}>
                <Bar child={ 'AppBar' } color={ 'primary' } />
            </div>
        )
    );

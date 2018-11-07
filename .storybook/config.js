import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { MuiThemeProvider } from '@material-ui/core/styles';
import * as React from 'react';

import { theme } from '@/components/Atoms'

withOptions({
    addonPanelInRight: true,
});

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.tsx$/);

function loadStories() {
    addDecorator((story) =>
        <MuiThemeProvider theme={theme}>
            {story()}
        </MuiThemeProvider>
    );
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

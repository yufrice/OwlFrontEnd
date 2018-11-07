import { configure } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';

withOptions({
    addonPanelInRight: true,
});

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.tsx$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

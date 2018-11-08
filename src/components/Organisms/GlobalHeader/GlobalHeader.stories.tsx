import { State,  Store } from "@sambego/storybook-state";
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { GlobalHeader } from './GlobalHeader';


storiesOf('Organisms', module)
    .add('GlobalHeader',
        () =>
            <State store={store}>
                <GlobalHeader
                    onClick={openHandler}
                    onClose={closeHandler}
                    onChange={changeHandler}
                />
            </State>
    );

const store = new Store([{
    configActive: false,
    tabIndex: 0,
}]);

const openHandler = () => {
    return store.set({
        configActive: true,
    });
};

const closeHandler = () => {
    return store.set({
        configActive: false,
    });
};

const changeHandler = (event: React.ChangeEvent, value: number) => {
    return store.set({
        tabIndex: value,
    });
};

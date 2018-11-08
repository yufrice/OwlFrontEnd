import Button from '@material-ui/core/Button';
import { State,  Store } from "@sambego/storybook-state";
import centered from '@storybook/addon-centered';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Modal } from '@/components/Molecules';


storiesOf('Molecules', module)
    .addDecorator(centered)
    .add('Modal',
        () =>
            <div>
                <Button
                    onClick={openHandler}
                    variant={'fab'}
                >
                    Open
                </Button>
                <State store={store}>
                    { (state: any) =>
                        <Modal
                            child={
                                <Button
                                    onClick={closeHandler}
                                >
                                    Close
                                </Button>}
                            open={store.get('active')}
                            onClose={closeHandler}
                        />
                    }
                </State>
            </div>
    );

const store = new Store({
    active: false,
});

const openHandler = () => {
    return store.set({
        active: true,
    });
};

const closeHandler = () => {
    return store.set({
        active: false,
    });
};

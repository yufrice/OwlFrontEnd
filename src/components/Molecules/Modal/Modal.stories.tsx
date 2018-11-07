import { State, StateDecorator, Store } from "@sambego/storybook-state";
import centered from '@storybook/addon-centered';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Button } from '@/components/Atoms';
import { Modal } from '@/components/Molecules';

const store = new Store({
    active: false
});

const openHandler = () => {
    return store.set({
        active: true
    });
};

const closeHandler = () => {
    return store.set({
        active: false
    });
};

storiesOf('Molecules', module)
    .addDecorator(centered)
    .addDecorator(StateDecorator(store))
    .add('Modal',
        () =>
            <div>
                <Button
                    child={'Open'}
                    onClick={openHandler}
                    variant={'fab'}
                />
                <State store={store}>
                    { (state: any) =>
                        <Modal
                            child={<Button
                                child={'Close'}
                                onClick={closeHandler}
                            />}
                            open={state.active}
                            onClose={closeHandler}
                        />
                    }
                </State>
            </div>
    );


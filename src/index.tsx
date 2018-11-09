import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import App from '@/components/Pages/App';
import { generateStore } from '@reducers';
import './index.css';

const store = generateStore();

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
document.getElementById('root') as HTMLElement
);
registerServiceWorker();

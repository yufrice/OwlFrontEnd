import { MuiThemeProvider } from '@material-ui/core/styles';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { theme } from './components/Atoms/Color/color';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const Root = () => (
    <MuiThemeProvider theme = {theme}>
        <App/>
    </MuiThemeProvider>
);

ReactDOM.render(
    <Root />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

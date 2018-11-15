import * as React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { bindActionCreators, Dispatch } from 'redux';
import { createGlobalStyle } from 'styled-components';

import * as AApp from '@/action/app';
import * as UI from '@/action/ui';
import { GlobalHeader } from '@/components/Organisms';
import App from '@/components/Pages/App';
import Debug from '@/components/Pages/Debug';
import { Edit } from '@/components/Pages/Edit';
import { IRootState } from '@reducers';
import './index.css';

const Router: React.SFC<any> = (props) => {
    const {
        openConfigView,
        closeConfigView,
        changeTab,
    } = props;
    return (
        <div>
            <GlobalStyle/>
            <GlobalHeader {...props.ui}
            onClick={openConfigView}
            onClose={closeConfigView}
            onChange={changeTab}
            />
            {/*Todo*/}
            {/*https://github.com/supasate/connected-react-router/issues/184*/}
            <Switch>
                <Route exact={true} path={'/'} component={App} />
                <Route path={'/edit'} component={Edit} />
                <Route path={'/debug'} component={Debug} />
            </Switch>
        </div>
    );
};

const GlobalStyle = createGlobalStyle`
    html {
        font-family: 'Noto Sans JP', sans-serif;
        background-color: rgba(0, 0, 0, .05);
        overflow-y: scroll;
        overflow-x: hidden;
        ::-webkit-scrollbar {
            width: 10px;
        };
        ::-webkit-scrollbar-track {
            background-color: rgba(0, 0, 0, 0);
        };
        ::-webkit-scrollbar-thumb {
            background-color: rgba(0, 0, 0, .05);
            border-radius: 16px;
            box-shadow: 0 0 0 4px slid rgba(255, 255, 255, .3);
        };
    };
`;

export default connect(
    (state: IRootState) => ({
        app: state.app,
        ui: state.ui,
    }),
    (dispatch: Dispatch) =>
        bindActionCreators(
            {...AApp.actions, ...UI.actions}, dispatch
        )
)(Router);

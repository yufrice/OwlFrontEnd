import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import * as Action from '@/action';
import * as AApp from '@/action/app';
import * as UI from '@/action/ui';
import { IRootState } from '@reducers';

type Props =  IRootState & Action.Type;

const Edit: React.SFC<Props> = (props) => (
    <div>Edit</div>
);

export default connect(
    (state: Props) => ({
        router: state.router,
        app: state.app ,
        ui: state.ui,
    }),
    (dispatch: Dispatch) =>
        bindActionCreators(
            {...AApp.actions, ...UI.actions}, dispatch
        )
)(Edit);

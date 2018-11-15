import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import styled from 'styled-components';

import * as Action from '@/action';
import * as AApp from '@/action/app';
import * as UI from '@/action/ui';
import { SearchView } from '@components/Organisms';
import { IRootState } from '@reducers';

type Props =  IRootState & Action.Type;


const Debug: React.SFC<Props> = (props) => {
        const {
            searchError,
            testFond,
        } = props;
        return (
            <StyledDiv>
                <button onClick={searchError}> init </button>
                <button onClick={testFond}> found </button>
                <SearchView {...props.app} {...props} />
            </StyledDiv>
        );
};

const StyledDiv = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

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
)(Debug);

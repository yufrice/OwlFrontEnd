import Grid from '@material-ui/core/Grid';
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import * as Action from '@/action';
import * as UI from '@/action/ui'
import { SearchForm } from "@/components/Molecules";
import { GlobalHeader, SearchResult} from '@/components/Organisms';
import { IRootState } from '@reducers';

type Props =  IRootState & Action.Type;

class App extends React.Component<Props> {
    public render() {
        const { tabIndex, configActive } = this.props.ui;
        const { openConfigView, closeConfigView, changeTab } = this.props;
        const mainView = ((index: number) => {
            if(index === 0) {
                return <div>
                    <SearchForm/>
                    <SearchResult/>
                </div>
            } else if (index === 1) {
                return <div> {index} </div>;
            } else if (index === 2) {
                return <div> {index} </div>;
            };
            return null;
        })(tabIndex);
        return (
            <div>
                <GlobalHeader tabIndex={tabIndex} configActive={configActive}
                              onClick={openConfigView} onClose={closeConfigView} onChange={changeTab}/>
                <Grid container={true} justify={"center"}>
                    <Grid item={true}>
                        {mainView}
                    </Grid>
                </Grid>
            </div>
        );
    };
};

export default connect(
    (state: IRootState) => ({
        ui: state.ui,
    }),
    (dispatch: Dispatch) => bindActionCreators(UI.actions, dispatch)
)(App)

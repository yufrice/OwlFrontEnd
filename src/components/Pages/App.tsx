import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import styled from 'styled-components';

import * as Action from '@/action';
import * as AApp from '@/action/app';
import * as UI from '@/action/ui';
import { SearchView } from '@components/Organisms';
import { IRootState } from '@reducers';

type Props = IRootState & Action.Type;

class App extends React.PureComponent<Props> {
  public render() {
    return (
      <StyledDiv>
        <SearchView {...this.props.app} {...this.props} />
      </StyledDiv>
    );
  }
}

const StyledDiv = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
`;

export default connect(
  (state: Props) => ({
    app: state.app,
    ui: state.ui,
  }),
  (dispatch: Dispatch) =>
    bindActionCreators({ ...AApp.actions, ...UI.actions }, dispatch),
)(App);

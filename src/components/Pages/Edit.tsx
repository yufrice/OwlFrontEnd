import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import styled from 'styled-components';

import * as Action from '@/action';
import * as AApp from '@/action/app';
import * as UI from '@/action/ui';
import { AddItem } from '@/components/Organisms';
import { IRootState } from '@reducers';

type Props = IRootState & Action.Type;

class Edit extends React.PureComponent<Props> {
  private AddItem = AddItem({
    onSubmit: this.props.submit,
    onChangeFile: this.props.inputFile,
  });
  public render() {
    return (
      <StyledDiv>
        <this.AddItem />
      </StyledDiv>
    );
  }
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default connect(
  (state: Props) => ({
    app: state.app,
    ui: state.ui,
  }),
  (dispatch: Dispatch) =>
    bindActionCreators({ ...AApp.actions, ...UI.actions }, dispatch),
)(Edit);

import Button, { ButtonProps } from '@material-ui/core/Button';
import Paper, { PaperProps } from '@material-ui/core/Paper';
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import styled from 'styled-components';

import * as Action from '@/action';
import * as AApp from '@/action/app';
import * as UI from '@/action/ui';
import { Modal } from '@/components/Molecules';
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
      <StyledPaper>
        <StyledButton onClick={this.props.openAddItem} variant='contained'>
          Add
        </StyledButton>
        <Modal
          open={this.props.ui.addItemActive}
          onClose={this.props.closeAddItem}
          size={[50, 50]}
          child={<this.AddItem />}
        />
        ここにリスト
      </StyledPaper>
    );
  }
}

const StyledPaper = styled(Paper as React.SFC<PaperProps>)`
  margin: 10%;
  padding: 10%;
`;

const StyledButton = styled(Button as React.SFC<ButtonProps>)`
  top: 0px;
`;

export default connect(
  (state: Props) => ({
    app: state.app,
    ui: state.ui,
  }),
  (dispatch: Dispatch) =>
    bindActionCreators({ ...AApp.actions, ...UI.actions }, dispatch),
)(Edit);

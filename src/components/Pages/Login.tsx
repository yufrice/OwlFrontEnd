import { Button } from '@material-ui/core';
import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { bindActionCreators, Dispatch } from 'redux';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import styled from 'styled-components';

import * as Action from '@/action';
import * as AApp from '@/action/app';
import * as UI from '@/action/ui';
import { TextField } from '@/components/Atoms';
import { IRootState } from '@reducers';

type Props = IRootState & Action.Type;

class Login extends React.PureComponent<InjectedFormProps<any> & Props> {
  public render() {
    return this.props.app.authState ? (
      <Redirect to='/' />
    ) : (
      <StyledDiv>
        <form>
          <Field name='ident' type='text' component={TextField} />
          <Field
            name='password'
            type='password'
            autocomplate='current-password'
            component={TextField}
          />
          <Button
            variant='contained'
            color='primary'
            // redux-fromからdispathするようにする
            onClick={this.props.loginHandler}
          >
            login
          </Button>
        </form>
      </StyledDiv>
    );
  }
}

const StyledDiv = styled.div`
  width: 300px;
  height: 300px;
  position: fixed;
  background: white;
  border-radius: 2px;
  box-shadow: 0 1px 3px;
  padding: 30px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LoginForm = reduxForm({
  form: 'loginForm',
})(Login);

export default connect(
  (state: Props) => ({
    app: state.app,
    ui: state.ui,
  }),
  (dispatch: Dispatch) =>
    bindActionCreators({ ...AApp.actions, ...UI.actions }, dispatch),
)(LoginForm);

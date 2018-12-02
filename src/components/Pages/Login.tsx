import Button from '@material-ui/core/Button';
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
    return this.props.app.auth ? (
      <Redirect to='/' />
    ) : (
      <form>
        <StyledDiv>
          <Field
            name='username'
            label='User'
            type='text'
            autofocus={true}
            required={true}
            autocomplate='username'
            component={TextField}
          />
          <Field
            name='password'
            label='Password'
            type='password'
            required={true}
            autocomplate='current-password'
            component={TextField}
          />
          <Button
            variant='contained'
            color='primary'
            disabled={this.props.invalid}
            // redux-fromからdispathするようにする
            onClick={this.props.loginHandler}
          >
            login
          </Button>
        </StyledDiv>
      </form>
    );
  }
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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

interface ILoginFields {
  username: string;
  password: string;
}

const validation = (values: ILoginFields) => {
  if (!values.username || !values.password) {
    return { username: 'error' } as ILoginFields;
  }
  return {};
};

const LoginForm = reduxForm({
  form: 'loginForm',
  validate: validation,
})(Login);

export default connect(
  (state: Props) => ({
    app: state.app,
    ui: state.ui,
  }),
  (dispatch: Dispatch) =>
    bindActionCreators({ ...AApp.actions, ...UI.actions }, dispatch),
)(LoginForm);

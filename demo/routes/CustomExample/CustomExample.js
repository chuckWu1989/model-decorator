import React, { Component } from 'react';
import { ViewModel } from '../../../src';
import Model from './Model';

const Login = (props) => {
  const { model: { account, password }, onAccountChange, onPasswardChange } = props;
  return (
    <div>
      <div>{account.title}</div>
      <div>
        <input type="text" value={account.val} onChange={onAccountChange} />
      </div>
      <div>{account.err}</div>
      <div>{account.totalLen}</div>
      <div>{password.title}</div>
      <div>
        <input type="text" value={password.val} onChange={onPasswardChange} />
      </div>
      <div>{password.err}</div>
      <div>{password.totalLen}</div>
    </div>
  );
};
const LoginContainer = ViewModel(Model)(Login);

class CustomExample extends Component {
  constructor(props) {
    super(props);
    this.onAccountChange = this.onAccountChange.bind(this);
    this.onPasswardChange = this.onPasswardChange.bind(this);
    this.state = { account: '', password: '' };
  }
  onAccountChange(e) {
    this.setState({ account: e.target.value });
  }
  onPasswardChange(e) {
    this.setState({ password: e.target.value });
  }
  render() {
    const { account, password } = this.state;
    return (
      <LoginContainer
        onAccountChange={this.onAccountChange}
        onPasswardChange={this.onPasswardChange}
        account={account}
        password={password}
      />
    );
  }
}

export default CustomExample;

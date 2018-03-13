// Component
import React, { Component } from 'react';
import { ViewModel } from '../../../src';
import Model from './Model';
import './style.less';

const Login = (props) => {
  const { model: { account, password }, onAccountChange, onPasswardChange } = props;
  return (
    <div className="login-style">
      <div className="title">{account.title}</div>
      <div className="total">{`word number: ${account.totalLen}`}</div>
      <div>
        <input type="text" value={account.val} onChange={onAccountChange} />
      </div>
      <div className="error">{account.err}</div>
      <div className="title">{password.title}</div>
      <div className="total">{`word number: ${password.totalLen}`}</div>
      <div>
        <input type="password" value={password.val} onChange={onPasswardChange} />
      </div>
      <div className="error">{password.err}</div>
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

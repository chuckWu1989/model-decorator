import React, { Component } from 'react';
import Member from '../../models/Member';
import { ViewModel } from '../../../src';
import './style.less';

@ViewModel(Member)
class MemberView extends Component {
  render() {
    return (
      <div>
        <div>
          <span>
            {this.props.name.value}
          </span>
        </div>
        <div>
          <span>
            {this.props.age.value}
          </span>
        </div>
      </div>
    );
  }
}

class SimpleExample extends Component {
  constructor(props) {
    super(props);
    this.ageChanged = this.ageChanged.bind(this);
    this.nameChanged = this.nameChanged.bind(this);
    this.state = { age: undefined, name: undefined };
  }
  ageChanged(event) {
    this.setState({ age: event.target.value });
  }
  nameChanged(event) {
    this.setState({ name: event.target.value });
  }
  render() {
    const { age, name } = this.state;
    return (
      <div>
        <input type="number" onChange={this.ageChanged} />
        <input onChange={this.nameChanged} />
        <MemberView age={age} name={name} />
      </div>
    );
  }
}

export default SimpleExample;

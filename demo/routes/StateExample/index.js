import React, { Component } from 'react';
import Member from '../../models/Member';

class StateExample extends Component {
  constructor(props) {
    super(props);
    this.ageChanged = this.ageChanged.bind(this);
    this.nameChanged = this.nameChanged.bind(this);
    this.state = new Member();
  }
  ageChanged(event) {
    const { age } = this.state;
    this.setState({ age: age.set(Number(event.target.value)) });
  }
  nameChanged(event) {
    const { name } = this.state;
    this.setState({ name: name.set(event.target.value) });
  }
  render() {
    const { age, name } = this.state;
    return (
      <div>
        <input onChange={this.nameChanged} value={name.val()} />
        <div>{name.err()}</div>
        <input type="number" onChange={this.ageChanged} value={age.val()} />
        <div>{age.err()}</div>
        <div>{`The name of member is ${name.val()} and the age is ${age.val()}`}</div>
      </div>
    );
  }
}

export default StateExample;

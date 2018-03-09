import React, { Component } from 'react';
import SimpleModel from './SimpleModel';
import { ViewModel } from '../../../src';

@ViewModel(SimpleModel)
class Answer extends Component {
  render() {
    const { name, age } = this.props;
    return (
      <div>
        <div>
          <label htmlFor="name">
            <span>{name.title()}</span>
            <input name="name" value={name.val()} readOnly />
            <span>{name.err()}</span>
          </label>
        </div>
        <div>
          <label htmlFor="age">
            <span>{age.title()}</span>
            <input name="age" value={age.val()} readOnly />
            <span>{age.err()}</span>
          </label>
        </div>
      </div>
    );
  }
}

class SimpleExample extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = { name: undefined, age: undefined };
  }
  onClick() {
    this.setState({ name: 'Chuck', age: 105 });
  }
  render() {
    return (
      <div>
        <input type="button" onClick={this.onClick} value="Request Data" />
        <Answer name={this.state.name} age={this.state.age} />
      </div>
    );
  }
}

export default SimpleExample;

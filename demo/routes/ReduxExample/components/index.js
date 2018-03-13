// Component
import React, { Component } from 'react';
import { ViewModel } from '../../../../src';
import CountModel from '../models/CountModel';
import './style.less';

@ViewModel(CountModel)
class Counter extends Component {
  render() {
    const { value, onIncrement, onDecrement } = this.props.model;
    return (
      <div className="counter-style">
        <p>
          Count: {value.val} times
          {' '}
          <button onClick={onIncrement.val}>
            +
          </button>
          {' '}
          <button onClick={onDecrement.val}>
            -
          </button>
        </p>
        <p className="error">
          {value.err}
        </p>
      </div>
    );
  }
}

export default Counter;

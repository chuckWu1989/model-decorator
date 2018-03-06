import React, { Component } from 'react';
import Member from '../../models/Member';
import { ViewModel } from '../../../src';
import './style.less';

@ViewModel(Member)
class SimpleExample extends Component {
  render() {
    return (
      <div />
    );
  }
}

export default SimpleExample;

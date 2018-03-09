import React, { Component } from 'react';
import Member from '../../models/Member';
import { ViewModel } from '../../../src';

@ViewModel(Member)
class MemberView extends Component {
  render() {
    return (
      <div>
        <div>
          <span>
            {this.props.name.val()}
          </span>
        </div>
        <div>
          <span>
            {this.props.age.val()}
          </span>
        </div>
      </div>
    );
  }
}

export default MemberView;

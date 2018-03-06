import React from 'react';
import Member from '../../models/Member';
import './style.less';

const member = new Member();
member.name = 'John';
console.log(member.name);

const SimpleExample = () => (
  <div />
);

export default SimpleExample;

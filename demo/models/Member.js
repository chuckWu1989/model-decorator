import { Type, DefineProps } from '../../src';

class Member {
  @DefineProps
  @Type('string')
  name
  @DefineProps
  @Type('number')
  age
}

export default Member;

import { Type, DefineProps } from '../../src';

class Member {
  @DefineProps
  @Type('string')
  name
}

export default Member;

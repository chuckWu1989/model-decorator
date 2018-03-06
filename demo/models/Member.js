import PropTypes from 'prop-types';
import { Type, DefineProps } from '../../src';

class Member {
  @DefineProps
  @Type(PropTypes.string, { errorMessage: 'Error name' })
  name
  @DefineProps
  @Type(PropTypes.number, { errorMessage: 'Error name' })
  age
}

export default Member;

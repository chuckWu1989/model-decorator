import PropTypes from 'prop-types';
import { Type, DefineProps, BaseModel } from '../../src';

class Member extends BaseModel {
  @DefineProps
  @Type(PropTypes.string, { errorMessage: 'Error name' })
  name
  @DefineProps
  @Type(PropTypes.number, { errorMessage: 'Error name' })
  age
}

export default Member;

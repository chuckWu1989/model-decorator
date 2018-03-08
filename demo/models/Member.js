import PropTypes from 'prop-types';
import { Type, Required, DefineProps, BaseModel, Range, DefaultValue, StringLen } from '../../src';

class Member extends BaseModel {
  @DefineProps
  @DefaultValue('Chuck')
  @StringLen([, 10], { errorMessage: 'Thx max length of name is 10' })
  @Type(PropTypes.string, { errorMessage: 'Error type. The type should be string' })
  @Required({ errorMessage: 'Name is required!' })
  name
  @DefineProps
  @DefaultValue(0)
  @Range([0, 5], { errorMessage: 'Range should be between 0 to 5!' })
  @Type(PropTypes.number, { errorMessage: 'Error type. The type should be number' })
  age
}

export default Member;

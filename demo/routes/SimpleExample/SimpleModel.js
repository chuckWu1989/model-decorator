import PropTypes from 'prop-types';
import { BaseModel, DefineProps, Type, DisplayName, StringLen, Range } from '../../../src';

class SimpleModel extends BaseModel {
  @DefineProps
  @DisplayName('User Name: ')
  @Type(PropTypes.string, { errorMessage: 'Error type of name. It should be string' })
  @StringLen([, 5], { errorMessage: 'Exceed max length 5 of name' })
  name
  @DefineProps
  @DisplayName('User age: ')
  @Type(PropTypes.number, { errorMessage: 'Error type of age. It should be number' })
  @Range([0, 100], { errorMessage: 'The range of age should between 0 and 100' })
  age
}

export default SimpleModel;

// CountModel
import PropTypes from 'prop-types';
import { BaseModel, DefineProps, Type, Range, Required } from '../../../../src';

class CountModel extends BaseModel {
  @DefineProps()
  @Type(PropTypes.number)
  @Range([0, 10], { errorMessage: '* Exceed the range' })
  value

  @DefineProps()
  @Type(PropTypes.func)
  @Required({ errorMessage: 'onIncrement is required!', criterions: value => typeof value !== 'function' })
  onIncrement

  @DefineProps()
  @Type(PropTypes.func)
  @Required({ errorMessage: 'onDecrement is required!', criterions: value => typeof value !== 'function' })
  onDecrement
}

export default CountModel;

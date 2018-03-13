// Model
import PropTypes from 'prop-types';
import { BaseModel, Descriptor, DefineProps, Type, DisplayName } from '../../../src';

const check = (value, { isPassword = true }) => {
  if (isPassword && !(/[A-Z]/).test(value)) {
    return false;
  } else if (!isPassword && !(/[a-z]/).test(value)) {
    return false;
  }
  if (!(/[0-9]/).test(value)) {
    return false;
  }
  return true;
};
const enhancer = (refObj, instanceObj) => {
  const proto = Object.getPrototypeOf(instanceObj);
  Object.defineProperty(proto, 'totalLen', {
    get: () => refObj.value.length,
    configurable: false,
    enumerable: false,
  });
};
const Login = ({ message }) => Descriptor(check, enhancer, message);

class Model extends BaseModel {
  @DefineProps({ isPassword: false })
  @DisplayName('Account: ')
  @Type(PropTypes.string)
  @Login({ message: 'At least one lowercase letter (a-z) and one number (0-9)!' })
  account

  @DefineProps({ isPassword: true })
  @DisplayName('Password: ')
  @Type(PropTypes.string)
  @Login({ message: 'At least one uppercase letter (A-Z) and one number (0-9)!' })
  password
}

export default Model;

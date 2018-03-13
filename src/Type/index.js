/* eslint no-console: off */
import { secret } from '../constants/config';
import Descriptor from '../Descriptor';

export const enhanceTarget = type => (
  (refObj) => {
    const proto = Object.getPrototypeOf(refObj);
    Object.defineProperty(proto, 'getType', {
      value: () => type,
      writable: false,
      enumerable: false,
      configurable: true,
    });
    Object.setPrototypeOf(refObj, proto);
  }
);
export const checkPropTypes = (propTypes, className, name) => (
  (value, { silence }) => {
    let result;
    try {
      const checkResult = propTypes(
        { [name]: value },
        name,
        className,
        name,
        null,
        secret,
      );
      if (checkResult === null) {
        result = true;
      } else {
        if (process.env.NODE_ENV !== 'production' && silence !== true) {
          console.error(checkResult);
        }
        result = false;
      }
    } catch (e) {
      result = false;
    }
    return result;
  }
);
export default (type, { errorMessage: message } = {}) => (
  (target, name, descriptor) => {
    const { constructor: { name: className } } = target;
    const check = checkPropTypes(type, className, name);
    const enhancer = enhanceTarget(type);
    return Descriptor(check, enhancer, message)(target, name, descriptor);
  }
);

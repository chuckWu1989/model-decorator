/* eslint no-console: off */
import secret from './config';

export const enhanceTarget = type => (
  (refObj) => {
    const prototype = {};
    Object.defineProperty(prototype, 'getType', {
      value: () => type,
    });
    Object.setPrototypeOf(refObj, prototype);
  }
);
export const checkPropTypes = (propTypes, className, name) => (
  (value) => {
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
        console.error(checkResult);
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
    const { name: className } = target.constructor;
    const { decorators = [] } = descriptor;
    decorators.push({
      check: checkPropTypes(type, className, name),
      enhancer: enhanceTarget(type),
      message,
    });
    descriptor.decorators = decorators;
    return descriptor;
  }
);

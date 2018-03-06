import lodash from 'lodash';

export const setter = (refObj, validates) => (
  (value) => {
    validates.every((item) => {
      const { check, message } = item;
      const isPassed = check(value, refObj);
      if (!isPassed) {
        refObj.error = message;
        return false;
      }
      return true;
    });
    refObj.value = value;
  }
);
export const getter = refObj => (
  () => lodash.clone(refObj)
);
export default (target, name, descriptor) => {
  const refObj = {};
  const { decorators = [] } = descriptor;
  const validates = decorators.map(({ check, message }) => ({ check, message }));
  let enhancers = decorators.map(({ enhancer }) => enhancer);
  enhancers = enhancers.filter(item => item !== undefined);
  enhancers.forEach((enhancer) => { enhancer(refObj); });
  return ({
    get: getter(refObj),
    set: setter(refObj, validates),
    configurable: true,
    enumerable: true,
  });
};

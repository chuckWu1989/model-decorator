import lodash from 'lodash';

export const setter = (refObj, descriptor) => (
  (value) => {
    const { checkers = [] } = descriptor;
    checkers.every((checker) => {
      const isPassed = checker.check(value);
      if (!isPassed) {
        refObj.error = checker.message;
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
  return ({
    get: getter(refObj),
    set: setter(refObj, descriptor),
    configurable: true,
    enumerable: true,
  });
};

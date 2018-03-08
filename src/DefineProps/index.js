export const setter = (refObj, validates) => (
  function set(value, opts = {}) {
    validates.every((item) => {
      refObj.error = undefined;
      const { check, message } = item;
      const isPassed = check(value, opts);
      if (!isPassed) {
        refObj.error = message;
        return false;
      }
      return true;
    });
    refObj.value = value;
    return this;
  }
);
export const getter = refObj => (
  () => refObj.value
);
export const error = refObj => (
  () => refObj.error
);
export function ModelItem(refObj, validates) {
  Object.defineProperties(
    this,
    {
      val: {
        value: getter(refObj),
        configurable: false,
        writable: false,
        enumerable: false,
      },
      err: {
        value: error(refObj),
        configurable: false,
        writable: false,
        enumerable: false,
      },
      set: {
        value: setter(refObj, validates),
        configurable: false,
        writable: false,
        enumerable: false,
      },
    },
  );
}
export function setInitializer(validates, enhancers) {
  return (
    function initializer() {
      const refObj = {};
      const instanceObj = Object.setPrototypeOf({}, new ModelItem(refObj, validates));
      enhancers.forEach((enhancer) => { enhancer(refObj, instanceObj); });
      return instanceObj;
    }
  );
}
export default (target, name, descriptor) => {
  const { decorators = [] } = descriptor;
  const validates = decorators.map(({ check, message }) => (
    { check, message }
  )).filter(item => item.check !== undefined);
  const enhancers = decorators.map(({ enhancer }) => enhancer).filter(item => item !== undefined);
  return ({
    initializer: setInitializer(validates, enhancers),
    enumerable: true,
    writable: false,
    configurable: false,
  });
};

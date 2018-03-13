export const setter = (refObj, validates, opts) => (
  function set(value) {
    validates.every((item) => {
      refObj.error = null;
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
export function ModelItem(refObj, validates, opts) {
  Object.defineProperties(
    this,
    {
      val: {
        get: getter(refObj),
        set: setter(refObj, validates, opts),
        configurable: false,
        enumerable: false,
      },
      err: {
        get: error(refObj),
        set: () => {},
        configurable: false,
        enumerable: false,
      },
    },
  );
}
export function setInitializer(validates, enhancers, opts) {
  return (
    function initializer() {
      const refObj = {};
      const instanceObj = Object.setPrototypeOf({}, new ModelItem(refObj, validates, opts));
      enhancers.forEach((enhancer) => { enhancer(refObj, instanceObj, opts); });
      return instanceObj;
    }
  );
}
export default (opts = {}) => (
  (target, name, descriptor) => {
    const { decorators = [] } = descriptor;
    const validates = decorators.map(({ check, message }) => (
      { check, message }
    )).filter(item => item.check !== null);
    const enhancers = decorators.map(({ enhancer }) => enhancer).filter(item => item !== null);
    return ({
      initializer: setInitializer(validates, enhancers, opts),
      enumerable: true,
      writable: false,
      configurable: false,
    });
  }
);

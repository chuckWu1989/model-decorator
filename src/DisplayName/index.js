export const enhanceTarget = target => (
  (refObj, instanceObj) => {
    const proto = Object.getPrototypeOf(instanceObj);
    Object.defineProperty(proto, 'title', {
      get: () => target,
      set: () => {},
      configurable: false,
      enumerable: false,
    });
  }
);
export default title => (
  (target, name, descriptor) => {
    const { decorators = [] } = descriptor;
    decorators.push({ enhancer: enhanceTarget(title) });
    descriptor.decorators = decorators;
    return descriptor;
  }
);

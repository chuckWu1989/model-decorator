export default (checker, { errorMessage: message } = {}) => (
  (target, name, descriptor) => {
    const { name: className } = target.constructor;
    const { decorators = [] } = descriptor;
    decorators.push({
      check: checker,
      enhancer: enhanceTarget(type),
      message,
    });
    descriptor.decorators = decorators;
    return descriptor;
  }
);

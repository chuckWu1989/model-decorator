export const enhanceTarget = value => (
  (refObj, instanceObj) => {
    instanceObj.set(value);
  }
);
export default value => (
  (target, name, descriptor) => {
    const { decorators = [] } = descriptor;
    decorators.push({ enhancer: enhanceTarget(value) });
    descriptor.decorators = decorators;
    return descriptor;
  }
);

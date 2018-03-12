export const enhanceTarget = value => (
  (refObj, instanceObj, { checkDefault = true }) => {
    if (checkDefault === true) {
      instanceObj.val = value;
    } else {
      refObj.value = value;
    }
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

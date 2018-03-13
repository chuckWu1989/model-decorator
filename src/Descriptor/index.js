export default (check = null, enhancer = null, message = null) => (
  (target, name, descriptor) => {
    const { decorators = [] } = descriptor;
    decorators.push({ check, enhancer, message });
    descriptor.decorators = decorators;
    return descriptor;
  }
);

import Descriptor from '../Descriptor';

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
export default (title) => {
  const enhancer = enhanceTarget(title);
  return Descriptor(null, enhancer);
};

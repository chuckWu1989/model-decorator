import Descriptor from '../Descriptor';

export const enhanceTarget = value => (
  (refObj, instanceObj, { checkDefault = true }) => {
    if (checkDefault === true) {
      instanceObj.val = value;
    } else {
      refObj.value = value;
    }
  }
);
export default (value) => {
  const enhancer = enhanceTarget(value);
  return Descriptor(null, enhancer);
};

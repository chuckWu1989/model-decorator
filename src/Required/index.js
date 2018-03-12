import Descriptor from '../Descriptor';

export const checkRequired = criterions => (
  (value) => {
    let result = true;
    if (typeof criterions === 'function') {
      result = criterions(value);
    } else if (value === undefined) {
      result = false;
    }
    return result;
  }
);
export default ({ errorMessage: message, criterions } = {}) => {
  const check = checkRequired(criterions);
  return Descriptor(check, null, message);
};

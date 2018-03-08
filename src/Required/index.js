export const checkRequired = criterions => (
  (value) => {
    let result = true;
    if (typeof criterions === 'function') {
      result = criterions(value);
    } else if (value === undefined || value === '' || value === null) {
      result = false;
    }
    return result;
  }
);
export default ({ errorMessage: message, criterions } = {}) => (
  (target, name, descriptor) => {
    const { decorators = [] } = descriptor;
    decorators.push({
      check: checkRequired(criterions),
      message,
    });
    descriptor.decorators = decorators;
    return descriptor;
  }
);

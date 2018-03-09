export const checkRegex = regex => (
  (value) => {
    const regexExp = new RegExp(regex);
    return regexExp.test(value);
  }
);
export default (regex, { errorMessage: message } = {}) => (
  (target, name, descriptor) => {
    const { decorators = [] } = descriptor;
    decorators.push({
      check: checkRegex(regex),
      message,
    });
    descriptor.decorators = decorators;
    return descriptor;
  }
);

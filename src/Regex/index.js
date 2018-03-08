export default (
  [lowerBound = 0, upperBound = Infinity],
  { errorMessage: message, mode = INCLUDEUL } = {},
) => (
  (target, name, descriptor) => {
    const { decorators = [] } = descriptor;
    decorators.push({
      check: checkRange(lowerBound, upperBound, mode),
      message,
    });
    descriptor.decorators = decorators;
    return descriptor;
  }
);

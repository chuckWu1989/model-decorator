import { INCLUDEUL, INCLUDEU, INCLUDEL, NEITHERUL } from '../constants/config';

export const checkRange = (lowerBound, upperBound, mode) => (
  (value) => {
    if (typeof value === 'string') {
      const len = value.length;
      switch (mode) {
        case INCLUDEUL: return lowerBound <= len && len <= upperBound;
        case INCLUDEU: return lowerBound < len && len <= upperBound;
        case INCLUDEL: return lowerBound <= len && len < upperBound;
        case NEITHERUL: return lowerBound < len && len < upperBound;
        default: break;
      }
    }
    return false;
  }
);
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

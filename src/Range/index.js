import { INCLUDEUL, INCLUDEU, INCLUDEL, NEITHERUL, OUT, OUTU, OUTL, OUTUL } from '../constants/config';

export const checkRange = (lowerBound, upperBound, mode) => (
  (value) => {
    switch (mode) {
      case INCLUDEUL: return lowerBound <= value && value <= upperBound;
      case INCLUDEU: return lowerBound < value && value <= upperBound;
      case INCLUDEL: return lowerBound <= value && value < upperBound;
      case NEITHERUL: return lowerBound < value && value < upperBound;
      case OUT: return value < lowerBound || value > upperBound;
      case OUTU: return value <= lowerBound || value > upperBound;
      case OUTL: return value < lowerBound || value >= upperBound;
      case OUTUL: return value <= lowerBound || value >= upperBound;
      default: break;
    }
    return false;
  }
);
export default (
  [lowerBound = -Infinity, upperBound = Infinity],
  { errorMessage: message, mode = INCLUDEL } = {},
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

import { INCLUDEUL, INCLUDEU, INCLUDEL, NEITHERUL } from '../constants/config';
import Descriptor from '../Descriptor';

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
) => {
  const check = checkRange(lowerBound, upperBound, mode);
  return Descriptor(check, null, message);
};

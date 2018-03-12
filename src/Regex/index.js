import Descriptor from '../Descriptor';

export const checkRegex = regex => (
  (value) => {
    const regexExp = new RegExp(regex);
    return regexExp.test(value);
  }
);
export default (regex, { errorMessage: message } = {}) => {
  const check = checkRegex(regex);
  return Descriptor(check, null, message);
};

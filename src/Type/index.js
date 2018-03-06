export const isNumber = value => typeof value === 'number';
export const isString = value => typeof value === 'string';
export const isArray = value => Array.isArray(value);
export const isBool = value => typeof value === 'boolean';
export const isObject = value => typeof value === 'object' && value !== null;
export const isNull = value => value === null;
export const isUndefined = value => value === undefined;
export const check = (type, value) => {
  switch (type) {
    case 'number': return isNumber(value);
    case 'string': return isString(value);
    case 'array': return isArray(value);
    case 'bool': return isBool(value);
    case 'object': return isObject(value);
    case 'null': return isNull(value);
    case 'undefined': return isUndefined(value);
    default: break;
  }
  return undefined;
};
export const Type = (type, { errorMessage: message } = {}) => (
  (target, name, descriptor) => {
    const { checkers = [] } = descriptor;
    checkers.push({ check, message });
    return descriptor;
  }
);

export default Type;

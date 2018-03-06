export default Model => (
  (target) => {
    const instanceModel = new Model();
    const proto = Object.getPrototypeOf(instanceModel);
    const keys = Object.keys(proto);
    const propTypes = keys.map(key => instanceModel[key].getType());
    Object.defineProperties(target, {
      propTypes: {
        value: propTypes,
        configurable: true,
        writable: true,
        enumerable: true,
      },
    });
    return target;
  }
);

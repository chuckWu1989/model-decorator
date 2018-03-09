class BaseModel {
  getValues() {
    const result = {};
    Object.keys(this).forEach((key) => {
      result[key] = this[key].val();
    });
    return result;
  }
  setValues(props, opts) {
    Object.keys(props).forEach((key) => {
      if (key in this && props[key] !== undefined) {
        this[key].set(props[key], opts);
      }
    });
    return this;
  }
  clone() {
    const values = this.getValues();
    const proto = Object.getPrototypeOf(this);
    const { constructor: Model } = proto;
    const model = new Model();
    model.setValues(values, { silence: true });
    return model;
  }
  isEqual(model) {
    const values = model.getValues();
    const nextValues = this.getValues();
    const result = Object.keys(values).every(key => nextValues[key] === values[key]);
    return result;
  }
  static checkErrors(model) {
    let result;
    Object.keys(model).every((key) => {
      const target = model[key];
      if (typeof target === 'object' && target !== null && 'err' in Object.getPrototypeOf(target) && typeof model[key].err === 'function') {
        result = model[key].err();
        return result === undefined;
      }
      return true;
    });
    return result;
  }
}

export default BaseModel;

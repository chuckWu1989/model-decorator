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
      if (key in this) {
        this[key].set(props[key], opts);
      }
    });
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
}

export default BaseModel;

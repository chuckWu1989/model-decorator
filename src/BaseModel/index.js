class BaseModel {
  constructor() {
    console.log(this);
  }
  getValues() {
    const result = {};
    const proto = Object.getPrototypeOf(this);
    Object.keys(proto).forEach((key) => {
      result[key] = this[key];
    });
    return result;
  }
  setValues(props) {
    Object.keys(props).forEach((key) => {
      if (key in this) {
        this[key] = props[key];
      }
    });
  }
  clone() {
    const Model = this;
    const model = new Model();
    console.log(model);
    return model;
  }
  isEqual(model) {
    const values = model.getValues();
    const NextValues = this.getValues();
    console.log(values, NextValues);
    return false;
  }
}

export default BaseModel;

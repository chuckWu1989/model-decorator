import { ModelItem } from '../DefineProps';

class BaseModel {
  getValues() {
    const result = {};
    Object.keys(this).forEach((key) => {
      result[key] = this[key].val;
    });
    return result;
  }
  setValues(props) {
    Object.keys(props).forEach((key) => {
      if (key in this && props[key] !== undefined) {
        this[key].val = props[key];
      }
    });
    return this;
  }
  clone() {
    const values = this.getValues();
    const proto = Object.getPrototypeOf(this);
    const { constructor: Model } = proto;
    const model = new Model();
    model.setValues(values);
    return model;
  }
  isEqual(model) {
    const values = model.getValues();
    const nextValues = this.getValues();
    const result = Object.keys(values).every(key => nextValues[key] === values[key]);
    return result;
  }
  checkErrors() {
    const result = [];
    Object.keys(this).forEach((key) => {
      const target = this[key];
      if (
        typeof target === 'object' &&
        target !== null &&
        this[key] instanceof ModelItem
      ) {
        this[key].val = this[key].val;
        if (this[key].err !== undefined) {
          result.push(this[key].err);
        }
      }
    });
    return result;
  }
}

export default BaseModel;

import React from 'react';
import toJson from 'enzyme-to-json';
import ViewModel from '../src/ViewModel';

const { shallow } = global;

describe('ViewModel', () => {
  it('should render properly', () => {
    const model = function Model() {
      this.setValues = () => {};
      this.getValues = () => ({});
    };
    const WrappedComponent = () => <div />;
    const ViewModelComponent = ViewModel(model)(WrappedComponent);
    const tree = toJson(shallow(<ViewModelComponent />));
    expect(tree).toMatchSnapshot();
  });
});

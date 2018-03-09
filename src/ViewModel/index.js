import React, { Component } from 'react';

const ViewModel = Model => (
  WrappedComponent => (
    class extends Component {
      componentWillMount() {
        this.setState({ model: new Model() });
      }
      render() {
        const { props, state: { model } } = this;
        const modelProps = model.setValues(props);
        return (
          <WrappedComponent {...props} {...modelProps} />
        );
      }
    }
  )
);

export default ViewModel;

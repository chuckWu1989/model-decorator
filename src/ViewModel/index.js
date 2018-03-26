import React, { Component } from 'react';

const ViewModel = Model => (
  WrappedComponent => (
    class extends Component {
      static defaultProps = (new Model()).getValues()
      componentWillMount() {
        this.setState({ model: new Model() });
      }
      render() {
        const { props, state: { model } } = this;
        model.setValues(props);
        return (
          <WrappedComponent {...props} model={model} />
        );
      }
    }
  )
);

export default ViewModel;

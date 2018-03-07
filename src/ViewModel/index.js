import React, { Component } from 'react';

export default Model => (
  WrappedComponent => (
    class extends Component {
      componentWillMount() {
        this.setState({ model: new Model() });
      }
      componentWillReceiveProps(nextProps) {
        const { model } = this.state;
        const nextModel = model.clone();
        nextModel.setValues(nextProps);
        console.log(nextModel, model);
        if (!nextModel.isEqual(model)) {
          this.setState({ model: nextModel });
        }
      }
      render() {
        const { props, state } = this;
        const { model } = state;
        const modelProps = model.getValues(model);
        return (
          <WrappedComponent {...props} {...modelProps} />
        );
      }
    }
  )
);

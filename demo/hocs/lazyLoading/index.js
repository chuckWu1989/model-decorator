import React from 'react';
import Loadable from 'react-loadable';
import './style.less';

const Loading = () => (
  <div className="loading-style">
    <div className="spinner">
      <div className="bounce1" />
      <div className="bounce2" />
      <div className="bounce3" />
    </div>
  </div>
);
const lazyLoading = loader => (
  Loadable({
    loader,
    loading: Loading,
  })
);

export default lazyLoading;

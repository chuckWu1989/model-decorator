import React from 'react';
import Loadable from 'react-loadable';

const Loading = () => (
  <div>Loading...</div>
);
const lazyLoading = loader => (
  Loadable({
    loader,
    loading: Loading,
  })
);

export default lazyLoading;

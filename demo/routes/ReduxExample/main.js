// Main
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import Counter from './containers';

const store = createStore(rootReducer);

const MainComponent = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

export default MainComponent;

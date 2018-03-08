import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import lazyLoading from '../hocs/lazyLoading';
import './style.less';

const MyRouter = () => (
  <Router>
    <div className="router-style">
      <div className="header">
        <div>React flowcharts</div>
      </div>
      <div className="navigator">
        <span className="item"><Link to="/">Home</Link></span>
        <span className="item"><Link to="/StateExample">StateExample</Link></span>
      </div>
      <div className="content-body">
        <Switch>
          <Route exact path="/" component={lazyLoading(() => import('./DecoratorExample'))} />
          <Route exact path="/StateExample" component={lazyLoading(() => import('./StateExample'))} />
        </Switch>
      </div>
    </div>
  </Router>
);

export default MyRouter;

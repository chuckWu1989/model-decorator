import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import lazyLoading from '../hocs/lazyLoading';
import githubImg from '../assets/github.png';
import './style.less';

const MyRouter = () => (
  <Router>
    <div className="router-style">
      <div className="header">
        <div>Model Decorator</div>
        <a target="_blank" href="https://github.com/d9767192/model-decorator" rel="noopener noreferrer">
          <img src={githubImg} alt="git hub connection" />
        </a>
      </div>
      <div className="container">
        <div className="navigator">
          <div className="item"><Link to="/">Simple Example</Link></div>
          <div className="item"><Link to="/ReactExample">React Example</Link></div>
          <div className="item"><Link to="/ReduxExample">Redux Example</Link></div>
          <div className="item"><Link to="/CustomExample">Custom Example</Link></div>
        </div>
        <div className="content-body">
          <Switch>
            <Route exact path="/" component={lazyLoading(() => import('./SimpleExample'))} />
            <Route exact path="/ReactExample" component={lazyLoading(() => import('./ReactExample'))} />
            <Route exact path="/ReduxExample" component={lazyLoading(() => import('./ReduxExample'))} />
            <Route exact path="/CustomExample" component={lazyLoading(() => import('./CustomExample'))} />
          </Switch>
        </div>
      </div>
    </div>
  </Router>
);

export default MyRouter;

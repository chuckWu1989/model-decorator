import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import MainComponent from './main';
import RawModel from './models/CountModel?stringFormat';
import Main from './main?stringFormat';
import Component from './components?stringFormat';
import Container from './containers?stringFormat';
import Action from './actions?stringFormat';
import Reducer from './reducers/countReducer?stringFormat';
import '../../utils/style.less';

const ReduxExample = () => (
  <div>
    <div className="example-title">
      {'Redux Example'}
    </div>
    <div className="example-area">
      <MainComponent />
    </div>
    <div className="code-area">
      <SyntaxHighlighter language="javascript">{RawModel}</SyntaxHighlighter>
    </div>
    <div className="code-area">
      <SyntaxHighlighter language="javascript">{Main}</SyntaxHighlighter>
    </div>
    <div className="code-area">
      <SyntaxHighlighter language="javascript">{Component}</SyntaxHighlighter>
    </div>
    <div className="code-area">
      <SyntaxHighlighter language="javascript">{Container}</SyntaxHighlighter>
    </div>
    <div className="code-area">
      <SyntaxHighlighter language="javascript">{Action}</SyntaxHighlighter>
    </div>
    <div className="code-area">
      <SyntaxHighlighter language="javascript">{Reducer}</SyntaxHighlighter>
    </div>
  </div>
);

export default ReduxExample;

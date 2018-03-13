import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import SimpleExample from './SimpleExample';
import RawModel from './SimpleModel?stringFormat';
import RawExample from './SimpleExample?stringFormat';
import '../../utils/style.less';

export default () => (
  <div>
    <div className="example-title">
      {'Simple Example'}
    </div>
    <div className="example-area">
      <SimpleExample />
    </div>
    <div className="code-area">
      <SyntaxHighlighter language="javascript">{RawModel}</SyntaxHighlighter>
    </div>
    <div className="code-area">
      <SyntaxHighlighter language="javascript">{RawExample}</SyntaxHighlighter>
    </div>
  </div>
);

import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import ReactExample from './ReactExample';
import RawModel from './AlbumModel?stringFormat';
import RawExample from './ReactExample?stringFormat';
import '../../utils/style.less';

export default () => (
  <div>
    <div className="example-title">
      {'State Example'}
    </div>
    <div className="example-area">
      <ReactExample />
    </div>
    <div className="code-area">
      <SyntaxHighlighter language="javascript">{RawModel}</SyntaxHighlighter>
    </div>
    <div className="code-area">
      <SyntaxHighlighter language="javascript">{RawExample}</SyntaxHighlighter>
    </div>
  </div>
);

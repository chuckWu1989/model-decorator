import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import CustomExample from './CustomExample';
import RawModel from './Model?stringFormat';
import RawExample from './CustomExample?stringFormat';

export default () => (
  <div>
    <div className="example-title">
      {'Customize Example'}
    </div>
    <div className="example-area">
      <CustomExample />
    </div>
    <div className="code-area">
      <SyntaxHighlighter language="javascript">{RawModel}</SyntaxHighlighter>
    </div>
    <div className="code-area">
      <SyntaxHighlighter language="javascript">{RawExample}</SyntaxHighlighter>
    </div>
  </div>
);

import React from 'react';

const ForLoopContent = () => {
  return (
    <div className="content">
      <h2 className="header">For Loop</h2>
      <p>
        The <span className="highlight">for loop</span> is used to iterate over a sequence (such as an array or a string)
        or other iterable objects. It allows you to execute a block of code repeatedly for a specified number of times.
      </p>
      <div>
        <h3 className='code-headers'>Code Syntax:</h3>
        <pre className="code">
          <code>
            {`for (initialization; condition; increment/decrement) {
  // code to be executed
}`}
          </code>
        </pre>
        <h3 className='code-headers'>Example:</h3>
        <pre className="code">
          <code>
            {`for (let i = 0; i < 5; i++) {
  console.log(i);
}`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default ForLoopContent;

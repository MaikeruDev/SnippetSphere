import React from 'react';

const WhileLoopContent = () => {
  return (
    <div className="content">
      <h2 className="header">While Loop</h2>
      <p>
        The <span className="highlight">while loop</span> is used to execute a block of code as long as a specified
        condition is true. It repeatedly checks the condition before executing the code block.
      </p>
      <div>
        <h3 className='code-headers'>Code Syntax:</h3>
        <pre className="code">
          <code>
            {`while (condition) {
  // code to be executed
}`}
          </code>
        </pre>
        <h3 className='code-headers'>Example:</h3>
        <pre className="code">
          <code>
            {`let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default WhileLoopContent;

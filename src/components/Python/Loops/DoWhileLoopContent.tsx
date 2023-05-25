import React from 'react';

const DoWhileLoopContent = () => {
  return (
    <div className="content">
      <h2 className="header">Do-While Loop</h2>
      <p>
        The <span className="highlight">do-while loop</span> is similar to the <code>while loop</code>, but it
        executes the code block <em>before</em> checking the condition. This means that the code block is guaranteed to
        execute at least once.
      </p>
      <div>
        <h3 className='code-headers'>Code Syntax:</h3>
        <pre className="code">
          <code>
            {`do {
  // code to be executed
} while (condition);`}
          </code>
        </pre>
        <h3 className='code-headers'>Example:</h3>
        <pre className="code">
          <code>
            {`let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default DoWhileLoopContent;

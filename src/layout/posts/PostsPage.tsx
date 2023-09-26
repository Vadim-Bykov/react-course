'use client';

import React, { useCallback, useEffect, useState } from 'react';

export function Posts() {
  const [text, setText] = useState<string>();

  const cleanField = () => setText('');

  const [num1, setNum1] = useState(4);
  const [num2, setNum2] = useState(5);
  const [result, setResult] = useState(0);

  // const sum = () => num1 + num2;
  const sum = useCallback(() => num1 + num2, [num1, num2]);

  useEffect(() => {
    // while text is changing sum fn is recreated and useEffect runs again
    console.log(`Sum is: ${sum()}`);
    // setResult((prev) => prev + sum()); //endless loop without useCallback
    setResult(sum()); // react is smart and not update result since this is the same number (but with object or array update will be endless loop)
  }, [sum]);

  const resetNumbers = () => {
    setNum1(0);
    setNum2(0);
    // setResult(0);
  };

  return (
    <div>
      <div>Post: {text}</div>
      <div>Result: {result}</div>

      <input
        type='text'
        value={text}
        placeholder='Post...'
        onChange={(e) => setText(e.target.value)}
      />

      <div className='mt-5'>
        <button onClick={cleanField}>Clean</button>
      </div>

      <div className='mt-5'>
        <button onClick={() => setResult((prev) => prev - 1)}>- 1</button>
        <button onClick={() => setResult((prev) => prev + 1)}>+ 1</button>
      </div>

      <div className='mt-5'>
        <button onClick={() => setNum1((prev) => prev - 1)}>- 1</button>
        <button onClick={() => setNum1((prev) => prev + 1)}>+ 1</button>
        <div> number 1 = {num1}</div>
      </div>

      <div className='mt-5'>
        <button onClick={() => setNum2((prev) => prev - 1)}>- 1</button>
        <button onClick={() => setNum2((prev) => prev + 1)}>+ 1</button>
        <div> number 2 = {num2}</div>
      </div>

      <button onClick={resetNumbers}>Reset numbers</button>
    </div>
  );
}

// IMPORTANT: the problem with rerender, usage useCallback
// console.log('string:', 'post' === 'post');
//   console.log('number:', 1 === 1);
//   console.log('object:', {} === {});
//   console.log('array:', [] === []);

//   function getName() {
//     return () => 'Vadim';
//   }
//   const f1 = getName();
//   const f2 = getName();
//   // const f1 = () => 'Vadim';
//   // const f2 = () => 'Vadim';

//   console.log('function:', f1 === f2);

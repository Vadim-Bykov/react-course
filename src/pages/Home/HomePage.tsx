'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';

type FibFn = (n: number) => number;

const fib: FibFn = (n) => {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
};

// const getExpensiveColors = () => {
//   for (let index = 0; index < 1_000_000_000; index++) {
//     //  do something
//   }
//   return ['white', 'black'];
// };

export function HomePage() {
  const [number, setNumber] = useState(0);
  const [randomText, setRandomText] = useState('');

  // const fib: FibFn = (n) => {
  //   return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  // };

  // useCallback returns a function
  // const fib: FibFn = useCallback((n) => {
  //   return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  // }, []);

  const fibonacciSequenceResult = fib(number);
  // useMemo returns a value
  // const fibonacciSequenceResult = useMemo(() => fib(number), [number, fib]);

  // // React understands that fibonacciSequenceResult is a primitive value and useEffect doesn't rerender
  // useEffect(() => {
  //   console.log('New fibonacciSequenceResult');
  // }, [ fibonacciSequenceResult ]);

  // const colors = getExpensiveColors();
  // // const colors = useMemo(() => getExpensiveColors(), []);

  // // [] === [] false and useEffect rerenders
  // useEffect(() => {
  //   console.log('New colors');
  // }, [colors]);

  return (
    <div>
      <div className='mb-10'>
        <div>Fibonacci Sequence</div>
        <input
          type='text'
          value={number}
          placeholder='Fibonacci...'
          onChange={(e) => {
            const value = e.target.value;
            if (typeof +value === 'number') {
              return setNumber(+value);
            }
            return;
          }}
        />
        <div>Fibonacci Sequence result: {fibonacciSequenceResult}</div>
      </div>

      <div>
        <div>Random text</div>
        <input
          type='text'
          value={randomText}
          placeholder='Random text'
          onChange={(e) => setRandomText(e.target.value)}
        />
      </div>
    </div>
  );
}

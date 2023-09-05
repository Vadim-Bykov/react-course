'use client';

import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

export function HomePage() {
  const [randomText, setRandomText] = useState('');
  const renders = useRef(0);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRandomText(e.target.value);
    renders.current++;
  };

  // useEffect(() => {
  //   console.log('ref object', renders.current);
  // }, [renders]);

  // const inputRef = useRef<HTMLInputElement>(null);
  // const setFocus = () => {
  //   inputRef.current?.focus();
  // };

  // const timerId = useRef<NodeJS.Timeout>();
  // const [seconds, setSeconds] = useState(0);

  // const startTimer = () => {
  //   timerId.current = setInterval(() => {
  //     renders.current++;
  //     setSeconds((prev) => prev + 1);
  //   }, 1000);
  // };

  // const stopTimer = () => {
  //   clearInterval(timerId.current);
  //   timerId.current = undefined;
  // };

  // const resetTimer = () => {
  //   stopTimer();
  //   if (seconds) {
  //     renders.current++;
  //     setSeconds(0);
  //   }
  // };

  return (
    <div>
      <div>
        <input
          // ref={inputRef}
          type='text'
          value={randomText}
          placeholder='Random text'
          onChange={onChange}
        />

        {/* <p>Renders: {renders.current}</p>
        <button onClick={setFocus} className='my-5'>
          Focus
        </button> */}

        {/* <div>
          <p>Seconds: {seconds}</p>
          <button className='mr-5' onClick={startTimer}>
            Start
          </button>
          <button className='mr-5' onClick={stopTimer}>
            Stop
          </button>
          <button onClick={resetTimer}>Reset</button>
        </div> */}
      </div>
    </div>
  );
}

'use client';

import React, { useEffect, useState } from 'react';

export function HomePage() {
  const [text, setText] = useState('');
  const [showText, setShowText] = useState(true);

  return (
    <div>
      <input
        type='text'
        value={text}
        placeholder='Post...'
        onChange={(e) => setText(e.target.value)}
        className='mr-5'
      />

      <label>
        <input
          type='checkbox'
          checked={showText}
          onChange={(e) => setShowText(e.target.checked)}
        />{' '}
        Show text
      </label>

      <div className='my-5'>
        <button onClick={() => setShowText((prev) => !prev)}>
          {showText ? 'Hide' : 'Show'} text
        </button>
      </div>

      {showText && <Text text={text} />}
    </div>
  );
}

function Text({ text }: { text: string }) {
  // useEffect(() => {
  //   console.log('mounted and updates every time');
  // });

  // useEffect(() => {
  //   console.log('mounted');

  //   return () => {
  //     console.log('unmounted');
  //   };
  // }, []);

  // useEffect(() => {
  //   console.log('updated', text);
  // }, [text]);

  return <div>Text: {text}</div>;
}

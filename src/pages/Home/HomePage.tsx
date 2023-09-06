'use client';

import React, { Reducer, useReducer, useState } from 'react';

type Colors = 'gold' | 'black';

// interface State {
//   color: Colors;
//   randomText: string;
//   count: number;
// }

// enum ActionType {
//   ChangeText = 'CHANGE_TEXT',
//   ChangeColor = 'CHANGE_COLOR',
//   Increment = 'INCREMENT',
//   Decrement = 'DECREMENT',
// }

// interface Action {
//   type: ActionType;
//   payload?: any;
// }

// const reducer: Reducer<State, Action> = (state, action) => {
//   switch (action.type) {
//     case ActionType.ChangeText:
//       return { ...state, randomText: action.payload };

//     case ActionType.Increment:
//       return { ...state, count: state.count + 1 };

//     case ActionType.Decrement:
//       return { ...state, count: state.count - 1 };

//     case ActionType.ChangeColor:
//       return { ...state, color: state.color === 'gold' ? 'black' : 'gold' };

//     default:
//       return state;
//   }
// };

// const initialState: State = {
//   color: 'black',
//   randomText: '',
//   count: 0,
// };

export function HomePage() {
  const [randomText, setRandomText] = useState('');
  const [color, setColor] = useState<Colors>('black');
  const [count, setCount] = useState(0);

  // const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>
        <input
          type='text'
          placeholder='Use state text'
          value={randomText}
          onChange={(e) => setRandomText(e.target.value)}
        />

        <div className='mt-3'>
          <p style={{ color }}>Count: {count}</p>
          <button className='mr-5' onClick={() => setCount((prev) => prev - 1)}>
            -
          </button>
          <button className='mr-5' onClick={() => setCount((prev) => prev + 1)}>
            +
          </button>
          <button
            onClick={() => {
              setColor(color === 'gold' ? 'black' : 'gold');
            }}
          >
            Color
          </button>
        </div>
      </div>

      {/* <div className='mt-10'>
        <input
          type='text'
          placeholder='Use reducer text'
          value={state.randomText}
          onChange={(e) =>
            dispatch({
              type: ActionType.ChangeText,
              payload: e.target.value,
            })
          }
        />
        <div className='mt-3'>
          <p style={{ color: state.color }}>Count: {state.count}</p>
          <button
            className='mr-5'
            onClick={() => dispatch({ type: ActionType.Decrement })}
          >
            -
          </button>
          <button
            className='mr-5'
            onClick={() => dispatch({ type: ActionType.Increment })}
          >
            +
          </button>
          <button onClick={() => dispatch({ type: ActionType.ChangeColor })}>
            Color
          </button>
        </div>
      </div> */}
    </>
  );
}

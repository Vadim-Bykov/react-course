'use client';

import React, {
  ChangeEventHandler,
  Dispatch,
  Reducer,
  useContext,
  useReducer,
  useState,
} from 'react';

type Colors = 'gold' | 'black';

interface State {
  color: Colors;
  randomText: string;
  count: number;
}

enum ActionType {
  ChangeText = 'CHANGE_TEXT',
  ChangeColor = 'CHANGE_COLOR',
  Increment = 'INCREMENT',
  Decrement = 'DECREMENT',
}

interface Action {
  type: ActionType;
  payload?: any;
}

const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case ActionType.ChangeText:
      return { ...state, randomText: action.payload };

    case ActionType.Increment:
      return { ...state, count: state.count + 1 };

    case ActionType.Decrement:
      return { ...state, count: state.count - 1 };

    case ActionType.ChangeColor:
      return { ...state, color: state.color === 'gold' ? 'black' : 'gold' };

    default:
      return state;
  }
};

const initialState: State = {
  color: 'black',
  randomText: '',
  count: 0,
};

// interface Context {
//   state: State;
//   dispatch: Dispatch<Action>;
// }

// const Context = React.createContext<Context>({
//   state: initialState,
//   dispatch: () => {},
// });

// const useAppContext = () => useContext(Context);

export function HomePage() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    // <Context.Provider value={{ dispatch, state }}>
    <div>
      <div>
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

        {/* <InputComponent
          text={state.randomText}
          onChange={(e) =>
            dispatch({
              type: ActionType.ChangeText,
              payload: e.target.value,
            })
          }
        />
        <p>{state.randomText}</p> */}

        {/* <ButtonBlock /> */}
      </div>
    </div>
  );
}

// const InputComponent = ({
//   text,
//   onChange,
// }: {
//   text: string;
//   onChange: ChangeEventHandler<HTMLInputElement>;
// }) => {
//   return (
//     <>
//       <div>Description and some content</div>

//       <Field text={text} onChange={onChange} />
//     </>
//   );
// };

// const Field = ({
//   text,
//   onChange,
// }: {
//   text: string;
//   onChange: ChangeEventHandler<HTMLInputElement>;
// }) => {
//   const {
//     state: { randomText },
//   } = useAppContext();
//   return (
//     <input
//       type='text'
//       placeholder='Use reducer text'
//       value={randomText}
//       onChange={onChange}
//     />
//   );
// };

// const ButtonBlock = () => {
//   const { state, dispatch } = useAppContext();

//   return (
//     <div className='mt-3'>
//       <p style={{ color: state.color }}>Count: {state.count}</p>
//       <button
//         className='mr-5'
//         onClick={() => dispatch({ type: ActionType.Decrement })}
//       >
//         -
//       </button>
//       <button
//         className='mr-5'
//         onClick={() => dispatch({ type: ActionType.Increment })}
//       >
//         +
//       </button>
//       <button onClick={() => dispatch({ type: ActionType.ChangeColor })}>
//         Color
//       </button>
//     </div>
//   );
// };

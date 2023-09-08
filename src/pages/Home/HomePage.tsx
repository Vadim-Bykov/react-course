"use client";

import clsx from "clsx";
import React, {
  Dispatch,
  Reducer,
  useContext,
  useEffect,
  useLayoutEffect,
  useReducer,
  useState,
} from "react";

type Colors = "gold" | "black";

interface State {
  color: Colors;
  randomText: string;
  count: number;
}

enum ActionType {
  ChangeText = "CHANGE_TEXT",
  ChangeColor = "CHANGE_COLOR",
  Increment = "INCREMENT",
  Decrement = "DECREMENT",
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
      return { ...state, color: state.color === "gold" ? "black" : "gold" };

    default:
      return state;
  }
};

const initialState: State = {
  color: "black",
  randomText: "",
  count: 0,
};

interface Context {
  state: State;
  dispatch: Dispatch<Action>;
}

const Context = React.createContext<Context>({
  state: initialState,
  dispatch: () => {},
});

const useAppContext = () => useContext(Context);

export function HomePage() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ dispatch, state }}>
      <InputComponent />
      <p>{state.randomText}</p>

      <ButtonBlock />
    </Context.Provider>
  );
}

const InputComponent = () => {
  return (
    <>
      <div>Description and some content</div>

      <Field />
    </>
  );
};

const Field = () => {
  const {
    state: { randomText },
    dispatch,
  } = useAppContext();
  // const colorClass = useColorHandler();

  return (
    <input
      type="text"
      placeholder="Use reducer text"
      value={randomText}
      // className={colorClass}
      onChange={(e) =>
        dispatch({
          type: ActionType.ChangeText,
          payload: e.target.value,
        })
      }
    />
  );
};

const colors = [
  "bg-red-100",
  "bg-red-200",
  "bg-red-300",
  "bg-red-400",
  "bg-red-500",
  "bg-red-600",
  "bg-red-700",
  "bg-red-800",
  "bg-red-900",
];

const ButtonBlock = () => {
  const {
    state: { color, count },
    dispatch,
  } = useAppContext();

  const [colorClass, setColorClass] = useState("bg-red-900");

  useEffect(() => {
    const value = Math.floor(Math.random() * colors.length);
    const colorString = colors[value];
    setColorClass(colorString);
  }, [count]);

  // const colorClass = useColorHandler();

  return (
    <div className="mt-3">
      <div className={clsx(["w-10 h-10 mr-5", colorClass])} />
      <p style={{ color: color }}>Count: {count}</p>
      <button
        className="mr-5"
        onClick={() => dispatch({ type: ActionType.Decrement })}
      >
        -
      </button>
      <button
        className="mr-5"
        onClick={() => dispatch({ type: ActionType.Increment })}
      >
        +
      </button>
      <button
        className={clsx(["mr-5", colorClass])}
        onClick={() => dispatch({ type: ActionType.ChangeColor })}
      >
        Color
      </button>
    </div>
  );
};

// const useColorHandler = () => {
//   const {
//     state: { count },
//   } = useAppContext();

//   const [colorClass, setColorClass] = useState("bg-red-950");

//   useLayoutEffect(() => {
//     const value = Math.floor(Math.random() * colors.length);
//     const colorString = colors[value];
//     setColorClass(colorString);
//   }, [count]);

//   return colorClass;
// };

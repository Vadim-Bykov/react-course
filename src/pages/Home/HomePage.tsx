"use client";

import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "@/store/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { ChangeEventHandler, useState } from "react";

interface ModalData {
  number: number;
  visible: boolean;
}

export function HomePage() {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();
  const [value, setValue] = useState(0);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const inputValue = +e.currentTarget.value;

    if (isNaN(inputValue)) return;

    setValue(inputValue);
  };

  const resetAll = () => {
    dispatch(reset());
    setValue(0);
  };

  return (
    <main>
      <section>
        <div className="mb-5">
          <p>Count: {count}</p>
          <div></div>
          <button onClick={() => dispatch(decrement())}>-</button>
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(reset())}>Reset</button>
        </div>

        <div>
          <input
            value={value}
            typeof="number"
            onChange={onChange}
            className="mb-2"
          />
          <br />
          <button onClick={() => dispatch(incrementByAmount(-value))}>
            - {value}
          </button>
          <button onClick={() => dispatch(incrementByAmount(value))}>
            + {value}
          </button>
          <button onClick={resetAll}>Reset all</button>
        </div>
      </section>
    </main>
  );
}

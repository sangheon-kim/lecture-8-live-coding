import {
  decrement,
  increment,
  setCount,
} from "@/store/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import React from "react";

export const CountView = () => {
  const dispatch = useAppDispatch();
  const { number } = useAppSelector((state) => state.count);

  return (
    <div>
      <h1>Count {number}</h1>
      <button onClick={() => dispatch(setCount(0))}>초기화</button>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

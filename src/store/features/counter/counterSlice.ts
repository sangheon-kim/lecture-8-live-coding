import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ICountState {
  number: number;
}

const initialState: ICountState = {
  number: 0,
};

export const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state) => {
      state.number = state.number + 1;
    },
    decrement: (state) => {
      state.number = state.number - 1;
    },
    setCount: (state, action: PayloadAction<number>) => {
      state.number = action.payload;
    },
  },
});

export const { increment, decrement, setCount } = countSlice.actions;
export const countReducer = countSlice.reducer;

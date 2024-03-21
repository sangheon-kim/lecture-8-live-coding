import { configureStore } from "@reduxjs/toolkit";
import { countReducer as count } from "./features/counter/counterSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      count,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
// Infer the `RootState` and `AppDispatch` types from the store itself

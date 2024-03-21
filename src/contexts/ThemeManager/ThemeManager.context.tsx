"use client";
import React from "react";
import { ThemeManager } from "./ThemeManager.context.type";

type ThemeContextProviderProps = {
  theme?: string;
  systemTheme?: string;
};

export const ThemeManagerState = React.createContext<ThemeManager.State | null>(
  null
);
const ThemeManagerDispatch =
  React.createContext<React.Dispatch<ThemeManager.Action> | null>(null);

const initialState: ThemeManager.State = {
  systemTheme: "",
  theme: "",
  isLight: false,
};

export function useThemeState() {
  const context = React.useContext(ThemeManagerState);
  // if (!context) {
  //   throw new Error("Cannot find ThemeManagerProvider");
  // }
  return context;
}

export function useThemeDispatch() {
  const dispatch = React.useContext(ThemeManagerDispatch);
  // if (!dispatch) {
  //   throw new Error("Cannot find ThemeManagerProvider");
  // }

  const changeTheme = React.useCallback(
    (theme: string) => {
      dispatch?.({ type: "CHANGE_THEME", payload: { theme } });
    },
    [dispatch]
  );

  return {
    changeTheme,
  };
}

const ThemeReducer = (
  state: ThemeManager.State,
  action: ThemeManager.Action
) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return {
        ...state,
        theme: action.payload.theme,
        isLight: action.payload.theme === "light",
      };
    case "SET_SYSTEM_THEME":
      return {
        ...state,
        systemTheme: action.payload.theme,
      };
    default:
      return state;
  }
};

export const ThemeManagerProvider = (
  props: React.PropsWithChildren<ThemeContextProviderProps>
) => {
  const { children, theme, systemTheme } = props;
  const isLight = theme ? theme === "light" : true;

  const [state, dispatch] = React.useReducer(ThemeReducer, {
    ...initialState,
    theme: theme ?? "light",
    systemTheme: systemTheme ?? "light",
    isLight,
  });

  return (
    <ThemeManagerState.Provider value={state}>
      <ThemeManagerDispatch.Provider value={dispatch}>
        {children}
      </ThemeManagerDispatch.Provider>
    </ThemeManagerState.Provider>
  );
};

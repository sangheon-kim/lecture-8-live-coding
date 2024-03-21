"use client";
import { ThemeManagerProvider } from "@/contexts/ThemeManager/ThemeManager.context";
import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header``;

type NavigationProps = {
  isLightTheme: boolean;
  setToggleTheme: (isLightTheme: boolean) => void;
};

const Navigation = (props: NavigationProps) => {
  const { isLightTheme, setToggleTheme } = props;

  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <ThemeToggle
        isLightTheme={isLightTheme}
        setToggleTheme={setToggleTheme}
      />
    </nav>
  );
};

type ThemeToggleButtonProps = {
  isLightTheme: boolean;
  setToggleTheme: (isLightTheme: boolean) => void;
};

const ThemeToggle = (props: ThemeToggleButtonProps) => {
  const { isLightTheme = false, setToggleTheme = () => null } = props;
  return (
    <button onClick={() => setToggleTheme(!isLightTheme)}>
      {isLightTheme ? "다크모드 변경" : "라이트 모드 변경"}
    </button>
  );
};

type HeaderProps = {
  isLightTheme: boolean;
  setToggleTheme: (isLightTheme: boolean) => void;
};

const Header = (props: HeaderProps) => {
  const { isLightTheme, setToggleTheme } = props;
  return (
    <StyledHeader>
      Header
      <Navigation isLightTheme={isLightTheme} setToggleTheme={setToggleTheme} />
    </StyledHeader>
  );
};

const MainView = () => {
  const [theme, setTheme] = React.useState("light");

  const isLight = React.useMemo(() => theme === "light", [theme]);

  const toggleTheme = React.useCallback((isLightTheme: boolean) => {
    setTheme(isLightTheme ? "light" : "dark");
  }, []);

  return (
    <ThemeManagerProvider theme={""} systemTheme="">
      <div>
        <Header isLightTheme={isLight} setToggleTheme={toggleTheme} />
        <h1>MainView</h1>
        <p>{isLight ? "라이트 모드" : "다크 모드"}</p>
      </div>
    </ThemeManagerProvider>
  );
};

export default React.memo(MainView);

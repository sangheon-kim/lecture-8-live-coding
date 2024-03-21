"use client";
import {
  ThemeManagerProvider,
  useThemeDispatch,
  useThemeState,
} from "@/contexts/ThemeManager/ThemeManager.context";
import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header``;

type NavigationProps = {};

const Navigation = (props: NavigationProps) => {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <ThemeToggle />
    </nav>
  );
};

type ThemeToggleButtonProps = {};

const ThemeToggle = (props: ThemeToggleButtonProps) => {
  const {} = props;
  const { theme } = useThemeState() ?? {};
  const { changeTheme } = useThemeDispatch();

  const isLight = theme === "light";

  const setToggleTheme = React.useCallback(
    (isLight: boolean) => {
      changeTheme(isLight ? "dark" : "light");
    },
    [changeTheme]
  );

  return (
    <button onClick={setToggleTheme.bind(null, isLight)}>
      {isLight ? "다크모드 변경" : "라이트 모드 변경"}
    </button>
  );
};

type HeaderProps = {};

const Header = (props: HeaderProps) => {
  const {} = props;
  return (
    <StyledHeader>
      Header
      <Navigation />
    </StyledHeader>
  );
};

const MainView = () => {
  const { isLight } = useThemeState() || {};
  return (
    <div>
      <Header />
      <h1>MainView</h1>
      <p>{isLight ? "라이트 모드" : "다크 모드"}</p>
    </div>
  );
};

export default React.memo(MainView);

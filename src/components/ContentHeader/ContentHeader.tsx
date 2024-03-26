"use client";
import React from "react";
import styled from "styled-components";

type ContentHeaderProps = {
  size?: "small" | "medium" | "large";
};

const Title = styled.h2<ContentHeaderProps>`
  ${({ size }) => {
    switch (size) {
      case "small":
        return `font-size: 1.5rem;`;
      case "medium":
        return `font-size: 2rem;`;
      case "large":
        return `font-size: 3rem;`;
    }
  }}
`;

export const ContentHeader = (
  props: React.PropsWithChildren<ContentHeaderProps>
) => {
  const { size = "medium", children } = props;
  return <Title size={size}>{children}</Title>;
};

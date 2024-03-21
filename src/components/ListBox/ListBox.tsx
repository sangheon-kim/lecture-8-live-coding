import React from "react";
import styled from "styled-components";

const Box = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-radius: 16px;
  background-color: #1b2730;
  gap: 16px;
`;

const Title = styled.h3`
  color: #fff;
  font-size: 0.8rem;
`;

type ListBoxProps = {
  title?: string;
  style?: React.CSSProperties;
};

export const ListBox = (props: React.PropsWithChildren<ListBoxProps>) => {
  const { title, children, style } = props;
  return (
    <Box style={style}>
      {title && <Title>{title}</Title>}
      {children}
    </Box>
  );
};

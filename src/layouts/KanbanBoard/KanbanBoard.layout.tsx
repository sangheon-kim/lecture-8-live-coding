"use client";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #06151d;
  min-height: 100vh;
  gap: 16px;
  padding: 16px 24px;
`;

const Header = () => {
  return <header>Header</header>;
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 auto;
  gap: 16px;
`;

const MainSection = styled.main`
  flex: 1 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Aside = styled.aside`
  flex-basis: 200px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const LeftAside = styled(Aside)``;

const Box = styled.div`
  padding: 16px;
  border-radius: 16px;
  background-color: #1b2730;
`;

const ThreadList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1 auto;
`;

const ThreadBox = styled.li`
  padding: 16px;
  border-radius: 16px;
  background-color: #1b2730;
`;

const ThreadItem = (props: React.PropsWithChildren) => {
  return <ThreadBox>{props.children}</ThreadBox>;
};

type KanbanBoardLayoutProps = {};

export const KanbanBoardLayout = (
  props: React.PropsWithChildren<KanbanBoardLayoutProps>
) => {
  const { children } = props;
  return (
    <Wrapper>
      <Header />
      <Container>
        <LeftAside>
          <Box>내 정보</Box>
          <Box>나를 팔로우 하고 있는 유저 목록</Box>
        </LeftAside>
        <MainSection>
          <Box>글쓰는 곳</Box>
          <ThreadList>
            <ThreadItem>스레드1</ThreadItem>
            <ThreadItem>스레드2</ThreadItem>
            <ThreadItem>스레드3</ThreadItem>
            <ThreadItem>스레드4</ThreadItem>
            <ThreadItem>스레드5</ThreadItem>
            <ThreadItem>스레드6</ThreadItem>
            <ThreadItem>스레드7</ThreadItem>
            <ThreadItem>스레드8</ThreadItem>
            <ThreadItem>스레드9</ThreadItem>
          </ThreadList>
        </MainSection>
        <Aside>
          <Box>Trend for you</Box>
        </Aside>
      </Container>
    </Wrapper>
  );
};

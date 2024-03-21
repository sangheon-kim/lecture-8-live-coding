"use client";
import {
  postService,
  tagService,
  userSerivce,
  weatherService,
} from "@/api/services";
import { ListBox } from "@/components/ListBox/ListBox";
import TagItem from "@/components/tag/TagItem";
import UserItem from "@/components/user/UserItem";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import styled from "styled-components";
import { faker } from "@faker-js/faker";
import PostItem from "@/components/post/PostItem";

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

const LinkText = styled.a`
  color: #1d88ca;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    color: #6f99ca;
  }
`;

type FollowerListProps = {
  limit?: number;
};

const FollowerList = (props: FollowerListProps) => {
  const { limit } = props;
  const { data: userListData } = useQuery({
    queryKey: ["user"],
    queryFn() {
      return userSerivce.getUserList();
    },
  });

  return (
    <ListBox title={"나를 팔로우 하고 있는 유저 목록"}>
      {userListData?.data.slice(0, limit ? limit : undefined).map((user) => {
        return <UserItem {...user} key={user?.id + ""} />;
      })}
      {limit && <LinkText>더보기</LinkText>}
    </ListBox>
  );
};

type TagListProps = {
  limit?: number;
};

const TagList = (props: TagListProps) => {
  const { limit } = props;
  const { data: tagListData } = useQuery({
    queryKey: ["tag"],
    queryFn({ queryKey }) {
      return tagService.getTagList();
    },
  });

  return (
    <ListBox title={"Trend for you"}>
      {tagListData?.data
        .filter((tag) => !!tag && tag.trim() !== "")
        .slice(0, limit ? limit : undefined)
        .map((tag, idx) => {
          return (
            <TagItem
              key={idx}
              tag={tag}
              count={faker.number.int({ min: 10, max: 10000 })}
            />
          );
        })}
      {limit && <LinkText>더보기</LinkText>}
    </ListBox>
  );
};

type PostListProps = {
  limit?: number;
};

const PostList = (props: PostListProps) => {
  const { limit } = props;

  const { data: postListData } = useQuery({
    queryKey: ["post"],
    queryFn() {
      return postService.getPostList();
    },
  });

  return (
    <ListBox style={{ backgroundColor: "transparent", padding: 0 }}>
      {postListData?.data.map((post) => {
        return <PostItem {...post} key={post?.id + ""} />;
      })}
    </ListBox>
  );
};

const ThreadItem = (props: React.PropsWithChildren) => {
  return <ThreadBox>{props.children}</ThreadBox>;
};

type KanbanBoardLayoutProps = {};

export const KanbanBoardLayout = (
  props: React.PropsWithChildren<KanbanBoardLayoutProps>
) => {
  const { children } = props;

  React.useEffect(() => {
    (async () => {
      // const result = await userSerivce.getUserList();
      // console.log("result", result);
    })();
  }, []);

  return (
    <Wrapper>
      <Header />
      <Container>
        <LeftAside>
          <Box>내 정보</Box>
          <FollowerList limit={3} />
        </LeftAside>

        <MainSection>
          <Box>글쓰는 곳</Box>
          <PostList />
        </MainSection>
        <Aside>
          <TagList limit={10} />
        </Aside>
      </Container>
    </Wrapper>
  );
};

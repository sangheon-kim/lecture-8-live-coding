"use client";
import { EmptyList } from "@/components/EmptyList/EmptyList";
import PostItem from "@/components/post/PostItem";
import { PostSkeleton } from "@/components/post/PostSkeleton";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  align-self: stretch;
  padding: 16px 8px;
`;

type PostListViewProps = {
  posts?: Array<PostPreview>;
  isSkeleton?: boolean;
};

const PostListView = (props: PostListViewProps) => {
  const { posts = [], isSkeleton } = props;

  return (
    <Wrapper>
      {/* <PostSkeleton /> */}
      {isSkeleton ? (
        Array.from({ length: 10 }).map((_, index) => {
          return <PostSkeleton key={index} />;
        })
      ) : posts?.length ? (
        posts.map((post) => {
          return <PostItem key={post.id} {...post} />;
        })
      ) : (
        <EmptyList message="댓글이 없습니다." />
      )}
    </Wrapper>
  );
};

export default React.memo(PostListView);

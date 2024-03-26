"use client";
import React from "react";
import styled from "styled-components";
import { CommentItem } from "@/components/comment/CommentItem";
import { EmptyList } from "@/components/EmptyList/EmptyList";

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  align-self: stretch;
  padding: 16px 8px;
`;

type CommentListViewProps = {
  comments: IComment[];
};

export const CommentListView = (props: CommentListViewProps) => {
  const { comments } = props;
  return (
    <Wrapper>
      {comments?.length ? (
        comments.map((comment) => {
          return <CommentItem key={comment.id} {...comment} />;
        })
      ) : (
        <EmptyList message="댓글이 없습니다." />
      )}
    </Wrapper>
  );
};

import React from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import { LinkText } from "../LinkText/LinkText";

const Wrapper = styled.div`
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 4px 4px rgba(22, 22, 22, 0.1);
  cursor: pointer;
  background-color: #1a1a1a;

  &:hover {
    box-shadow: 0 16px 16px rgba(22, 22, 22, 0.4);
  }
`;

const CommentSummary = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const CommentThumbnail = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  align-self: flex-start;
`;

const OwnerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const CommentAuthor = styled.h4`
  font-size: 1em;
  color: #ffffff;
`;

const CommentPublishedAt = styled.time`
  font-size: 0.6em;
  color: #64727f;
`;

const CommentContent = styled.p`
  margin-top: 8px;
`;

type CommentItemProps = IComment & {};

export const CommentItem = (props: CommentItemProps) => {
  const { owner, publishDate, message, post: postId } = props;
  const fullName = React.useMemo(() => {
    return `${owner.firstName} ${owner.lastName}`;
  }, [owner]);
  return (
    <Wrapper>
      <CommentSummary>
        <CommentThumbnail src={owner.picture} />
        <OwnerInfo>
          <CommentAuthor>{fullName}</CommentAuthor>
          <CommentPublishedAt>
            {dayjs(publishDate).format("H:mm A, DD MM")}
          </CommentPublishedAt>
        </OwnerInfo>
      </CommentSummary>
      <CommentContent>{message}</CommentContent>
      <LinkText href={`/post/${postId}`}>게시글로 이동</LinkText>
    </Wrapper>
  );
};

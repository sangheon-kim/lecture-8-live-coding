"use client";
import { skeletonStyle } from "@/styles/skeleton";
import React from "react";
import styled from "styled-components";
import { TiStarburst } from "react-icons/ti";
import { MdCheck } from "react-icons/md";

const Wrapper = styled.li`
  padding: 16px;
  border-radius: 16px;
  background-color: #1b2730;
`;

const StyledLink = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const Thumbnail = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  ${skeletonStyle}
`;

const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  gap: 4px;
`;

const AccountInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

const UserName = styled.p`
  color: #ffffff;
  font-size: 1em;
  ${skeletonStyle}
`;

const AccountName = styled.p`
  font-size: 10px;
  color: #64727f;
  ${skeletonStyle}
`;

const Date = styled(AccountName)`
  ${skeletonStyle}
`;

const Content = styled(UserName)`
  color: #c5cfd2;
  ${skeletonStyle}
`;

const StyledBadge = styled.div`
  position: relative;
  width: 16px;
  height: 16px;
  ${skeletonStyle}
`;

const Check = styled(MdCheck)`
  position: absolute;
  top: 4px;
  left: 50%;
  transform: translateX(-50%);
`;

const BottomRow = styled.div`
  ${skeletonStyle}
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  margin-top: 8px;
  ${skeletonStyle}
`;

const LikeCount = styled(AccountName)``;

const HashTags = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

const Badge = () => {
  return (
    <StyledBadge>
      {/* <TiStarburst color={"#2076FA"} size={16} /> */}
      {/* <Check color={"#ffffff"} size={8} /> */}
    </StyledBadge>
  );
};

export const PostSkeleton = () => {
  return (
    <Wrapper>
      <StyledLink>
        <Thumbnail />
        <PostInfo>
          <AccountInfo>
            <UserName>{"Skeleton"}</UserName>
            <Badge />
            <AccountName>{"@" + "AccountName"}</AccountName>
          </AccountInfo>
          <Date>{"lorem"}</Date>
          <Content>{"lorem"}</Content>
          <HashTags style={{ width: 50, height: 30 }}></HashTags>
          <BottomRow style={{ height: 25 }}>
            <ButtonGroup>{/* <LikeCount>{0}</LikeCount> */}</ButtonGroup>
          </BottomRow>
        </PostInfo>
      </StyledLink>
    </Wrapper>
  );
};

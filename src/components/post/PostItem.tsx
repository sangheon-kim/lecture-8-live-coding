import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { TiStarburst } from "react-icons/ti";
import { MdCheck } from "react-icons/md";
import { IoHeartCircle } from "react-icons/io5";
import dayjs from "dayjs";

const Wrapper = styled.li`
  padding: 16px;
  border-radius: 16px;
  background-color: #1b2730;
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const Thumbnail = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
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
`;

const AccountName = styled.p`
  font-size: 10px;
  color: #64727f;
`;

const Date = styled(AccountName)``;

const Content = styled(UserName)`
  color: #c5cfd2;
`;

const StyledBadge = styled.div`
  position: relative;
  width: 16px;
  height: 16px;
`;

const Check = styled(MdCheck)`
  position: absolute;
  top: 4px;
  left: 50%;
  transform: translateX(-50%);
`;

const BottomRow = styled.div``;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  margin-top: 8px;
`;

const LikeCount = styled(AccountName)``;

const HashTags = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

const HastTag = styled.li`
  color: #2076fa;
  font-size: 0.7em;

  &::before {
    content: "#";
  }
`;

const Badge = () => {
  return (
    <StyledBadge>
      <TiStarburst color={"#2076FA"} size={16} />
      <Check color={"#ffffff"} size={8} />
    </StyledBadge>
  );
};

const PostItem = (props: PostPreview) => {
  const { text, owner, tags, likes, id, publishDate } = props;
  return (
    <Wrapper>
      <StyledLink href={`/post/${id}`}>
        <Thumbnail src={owner.picture} alt={"유저 프로필"} />
        <PostInfo>
          <AccountInfo>
            <UserName>{owner.firstName + " " + owner?.lastName}</UserName>
            <Badge />
            <AccountName>{"@" + owner.firstName}</AccountName>
          </AccountInfo>
          <Date>{dayjs(publishDate).format("YYYY-MM-DD")}</Date>
          <Content>{text}</Content>
          <HashTags>
            {tags.map((tag, idx) => {
              return (
                <HastTag key={idx}>
                  <Link href={`/tag/${tag}`}>{tag}</Link>
                </HastTag>
              );
            })}
          </HashTags>
          <BottomRow>
            <ButtonGroup>
              <p
                style={{
                  background: "#fff",
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <IoHeartCircle size={26} color={"#F2506D"} />
              </p>
              <LikeCount>{likes}</LikeCount>
            </ButtonGroup>
          </BottomRow>
        </PostInfo>
        {/* <p>{text}</p>
        <p>{owner?.firstName + " " + owner.lastName}</p>
        <p>{tags}</p>
        <p>{likes}</p> */}
      </StyledLink>
    </Wrapper>
  );
};

export default PostItem;

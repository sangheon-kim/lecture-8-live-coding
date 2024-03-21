import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.li``;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

const Thumbnail = styled.div`
  position: relative;
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 12px;
`;

const Name = styled.p`
  color: #ffffff;
  font-size: 0.9em;
`;

const AccountName = styled.p`
  color: #aaaaaa;
  font-size: 0.8em;
`;

const Button = styled.button`
  border-radius: 16px;
  background-color: #ffffff;
  color: #222222;
  height: 32px;
  padding: 0 8px;
`;

type UserItemProps = IUserPreview & {};

const UserItem = (props: UserItemProps) => {
  const { picture } = props;
  return (
    <Wrapper>
      <StyledLink href={`/user/${props.id}`}>
        <Thumbnail>
          <img
            src={picture}
            alt={"user profile picture"}
            width={36}
            height={36}
            style={{ borderRadius: "50%" }}
          />
        </Thumbnail>
        <UserInfo>
          <Name>{`${props.title} ${props.firstName} ${props.lastName}`}</Name>
          <AccountName>{`@${props.firstName}${props.lastName}`}</AccountName>
        </UserInfo>
        <Button>Follow</Button>
      </StyledLink>
    </Wrapper>
  );
};

export default React.memo(UserItem);

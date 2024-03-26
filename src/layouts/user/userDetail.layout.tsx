"use client";
import React from "react";
import styled from "styled-components";
import { en } from "@faker-js/faker";
import Image from "next/image";
import Link from "next/link";

const Wrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BackBoardWrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: #040f17;
  margin-bottom: 48px;

  @media screen and (min-width: 450px) {
    margin-bottom: 72px;
  }
`;

const BackBoard = styled.div`
  width: 100%;
  position: relative;
  aspect-ratio: 16 / 9;
  max-width: 600px;
  margin: 0 auto;
`;

const Thumbnail = styled.div`
  position: absolute;
  left: 50%;
  bottom: -27px;
  transform: translate(-50%);
  aspect-ratio: 1 / 1;
  width: 54px;
  border-radius: 50%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 450px) {
    width: 100px;
    bottom: -36px;
  }
`;

const Name = styled.h2`
  color: #f2f2f2;
  font-size: 24px;

  @media screen and (min-width: 768px) {
    font-size: 36px;
  }
`;

const AccountName = styled.p`
  font-size: 10px;
  color: #64727f;
  margin: 16px 0;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

const Bio = styled.p`
  color: #fafafa;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  max-width: 80%;
  overflow: hidden;
`;

const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  margin: 24px 0;
`;

type UserProfilePreviewProps = Pick<
  UserDetail,
  "firstName" | "picture" | "lastName" | "id"
> & {
  backgroundImage?: string;
};

function ProfilePreview(
  props: React.PropsWithChildren<UserProfilePreviewProps>
) {
  const { firstName, picture, lastName, backgroundImage, id } = props;

  const bg = backgroundImage ?? `https://picsum.photos/1924/1080?version=${id}`;
  const bio = en?.lorem?.words?.slice(0, 10).join(" ");
  const fullName = `${firstName} ${lastName}`;

  return (
    <Wrapper>
      <BackBoardWrapper>
        <BackBoard>
          {/* <LegacyImage src={bg} alt="background" /> */}
          <Image src={bg} fill={true} alt={"background"} />
        </BackBoard>
        <Thumbnail
          style={{
            backgroundImage: `url(${picture})`,
          }}
        ></Thumbnail>
      </BackBoardWrapper>
      <Name>{fullName}</Name>
      <AccountName>{"@" + firstName}</AccountName>
      <Bio>{bio}</Bio>
    </Wrapper>
  );
}

type UserDetailLayoutProps = {
  user: UserDetail;
};

const links = [
  {
    id: "detail",
    label: "Information",
  },
  {
    id: "comment",
    label: "Comments",
  },
  {
    id: "post",
    label: "Posts",
  },
];

export function UserDetailLayout(
  props: React.PropsWithChildren<UserDetailLayoutProps>
) {
  const { children, user } = props;

  return (
    <React.Fragment>
      <ProfilePreview
        firstName={user.firstName}
        picture={user.picture}
        lastName={user.lastName}
        id={user.id}
      />
      <Navigation>
        {links.map((link) => {
          return (
            <Link href={`/user/${user.id}/${link.id}`} key={link.id}>
              {link.label}
            </Link>
          );
        })}
      </Navigation>
      {children}
    </React.Fragment>
  );
}

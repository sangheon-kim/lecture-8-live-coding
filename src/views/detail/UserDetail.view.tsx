"use client";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 16px;
  width: 100%;
`;

const InfoWrapper = styled.div`
  padding: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  align-self: stretch;
`;

const PersonalInfo = styled(InfoWrapper)``;

const Location = styled(InfoWrapper)`
  background-color: #4a4a4a;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 16px;
`;

const KeyValueSet = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1 1 110px;
`;

const Key = styled.p`
  font-size: 0.8em;
  color: #a1a9ae;
`;

const Value = styled.p`
  font-size: 1em;
  color: #ffffff;
`;

const InfoSet = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 24px;
  word-break: break-all;
`;

type KeyValueItemProps = {
  label: string;
  value: string;
};

const KeyValueItem = (props: KeyValueItemProps) => {
  const { label, value } = props;
  return (
    <KeyValueSet>
      <Key>{label}</Key>
      <Value>{value}</Value>
    </KeyValueSet>
  );
};

export const UserDetailView = (userInfo: UserDetail) => {
  const {} = userInfo;

  const infoMap = new Map([
    ["Full Name", userInfo.firstName + " " + userInfo.lastName],
    ["Email", userInfo.email],
    ["Phone", userInfo.phone],
  ]);

  return (
    <Wrapper>
      <PersonalInfo>
        <Title>Personal Info</Title>
        <InfoSet>
          {Array.from(infoMap).map(([key, value]) => {
            return <KeyValueItem key={key} label={key} value={value} />;
          })}
        </InfoSet>
      </PersonalInfo>
      <Location>
        <Title>Location</Title>
      </Location>
    </Wrapper>
  );
};

import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Wrapper = styled.li`
  padding: 4px 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const LinkWrapper = styled(Link)``;

const Tag = styled.p`
  color: #ffffff;
  font-size: 0.9em;

  &::before {
    content: "#";
  }
`;

const Count = styled.span`
  color: #aaaaaa;
  font-size: 0.8em;
`;

interface TagItemProps {
  tag: string;
  count?: number;
}

const TagItem = (props: TagItemProps) => {
  const { tag, count } = props;

  if (!tag) return null;
  const trim = tag.replace(/#/g, "").trim();
  return (
    <Wrapper>
      <LinkWrapper href={`/tag/${trim}`} title={"테그뱔 게시글 이동"}>
        {tag && <Tag>{trim}</Tag>}
        {count && <Count>{count} Posts</Count>}
      </LinkWrapper>
    </Wrapper>
  );
};

export default React.memo(TagItem);

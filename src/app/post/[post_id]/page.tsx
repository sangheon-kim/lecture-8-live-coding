import React from "react";

type PostDetailPageProps = {
  params: {
    post_id: string;
  };
};

export default function PostDetailPage(props: PostDetailPageProps) {
  const { params } = props;
  const postId = params.post_id;
  return <div>Post Detail {postId}</div>;
}

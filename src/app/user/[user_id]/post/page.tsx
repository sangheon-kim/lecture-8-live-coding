import { postService } from "@/api/services";
import { ContentHeader } from "@/components/ContentHeader/ContentHeader";
import PostListView from "@/views/posts/PostList.view";
import React from "react";

type UserDetailPageProps = {
  params: {
    user_id: string;
  };
};

export default async function UserPostPage(props: UserDetailPageProps) {
  const { params } = props;
  const postData = await postService.getPostListByUser(params.user_id);
  return (
    <React.Fragment>
      <ContentHeader>게시글 목록</ContentHeader>
      <PostListView posts={postData.data} />
    </React.Fragment>
  );
}

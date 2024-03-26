import { commentService } from "@/api/services";
import { ContentHeader } from "@/components/ContentHeader/ContentHeader";
import { CommentListView } from "@/views/comments/CommentList.view";
import React from "react";

type UserDetailPageProps = {
  params: {
    user_id: string;
  };
};

export default async function UserCommentPage(props: UserDetailPageProps) {
  const { params } = props;
  const commentList = await commentService.getCommentListByUser(params.user_id);

  return (
    <React.Fragment>
      <ContentHeader>유저 댓글</ContentHeader>
      <CommentListView comments={commentList.data} />
    </React.Fragment>
  );
}

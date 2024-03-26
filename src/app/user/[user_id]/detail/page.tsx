import React from "react";
import { ContentHeader } from "@/components/ContentHeader/ContentHeader";
import { UserDetailView } from "@/views/detail/UserDetail.view";
import { userSerivce } from "@/api/services";

type UserDetailPageProps = {
  params: {
    user_id: string;
  };
};

export default async function UserDetailPage(props: UserDetailPageProps) {
  const { params } = props;
  const userDetail = await userSerivce.getUserById(params.user_id);
  return (
    <React.Fragment>
      <ContentHeader>유저 상세</ContentHeader>
      <UserDetailView {...userDetail} />
    </React.Fragment>
  );
}

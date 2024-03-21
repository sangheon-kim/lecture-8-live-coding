import { userSerivce } from "@/api/services";
import React from "react";

type UserDetailPageProps = {
  params: {
    user_id: string;
  };
};

export default async function UserDetailPage(props: UserDetailPageProps) {
  const { params } = props;
  const userData = await userSerivce.getUserById(params.user_id);

  return (
    <div>
      <h1>유저 상세 페이지</h1>
    </div>
  );
}

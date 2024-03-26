import { userSerivce } from "@/api/services";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import React from "react";

type UserDetailPageProps = {
  params: {
    user_id: string;
  };
};

export async function generateMetadata({
  params,
}: UserDetailPageProps): Promise<Metadata> {
  const id = params.user_id;

  const data = await userSerivce.getUserById(id);
  const fullName = data.firstName + " " + data.lastName;
  const title = "유저 상세 페이지 | " + fullName;
  const description = "유저 상세 페이지 입니다.";
  const alt = fullName + "님의 프로필 사진";

  return {
    title,
    description,
    keywords: ["트위터", "sns", "유저"],
    openGraph: {
      title,
      description,
      images: [
        {
          url: data.picture,
          width: 800,
          height: 600,
          alt,
        },
      ],
    },
  };
}

export default async function UserDetailPage(props: UserDetailPageProps) {
  const { params } = props;

  return redirect(`/user/${params.user_id}/detail`);
}

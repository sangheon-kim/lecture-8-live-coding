import { userSerivce } from "@/api/services";
import { UserDetailLayout } from "@/layouts/user/userDetail.layout";

type UserDetailPageProps = {
  params: {
    user_id: string;
  };
};

export default async function Layout(
  props: React.PropsWithChildren<UserDetailPageProps>
) {
  const { children, params } = props;
  const userData = await userSerivce.getUserById(params.user_id);

  return (
    <UserDetailLayout user={userData}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {children}
      </div>
    </UserDetailLayout>
  );
}

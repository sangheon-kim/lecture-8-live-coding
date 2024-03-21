import { postService } from "@/api/services";
import PostListView from "@/views/posts/PostList.view";

type PostListByTagPageProps = {
  params: {
    tag_id: string;
  };
};

const getData = async (tagId: string) => {
  const data = await postService.getPostListByTag(tagId);

  return data;
};

export async function generateMetadata({ params }: PostListByTagPageProps) {
  const tag = params.tag_id;
  return {
    title: `${tag} 게시물 검색 결과`,
    description: `Elice Coding Eightwitter ${tag} 게시물 검색 결과`,
  };
}

export default async function PostListByTagPage(props: PostListByTagPageProps) {
  const { params } = props;

  const tag = params.tag_id;
  const data = await postService.getPostListByTag(tag);

  return (
    <div>
      <h1>{tag} 게시물 검색 결과</h1>
      <PostListView />
    </div>
  );
}

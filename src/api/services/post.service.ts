import axios, { AxiosInstance } from "axios";

export class PostService {
  constructor(private _ajax: AxiosInstance = axios) {
    this.createPost = this.createPost.bind(this);
  }

  /**
   * @method GET
   * @summary 게시물 목록 조회
   * @description 게시물 목록을 조회합니다.
   * @memberof PostService
   */
  async getPostList() {
    const { data } = await this._ajax.get<ResponseList<PostPreview>>("/post");

    return data;
  }

  /**
   * @method GET
   * @summary 유저별 게시물 목록 조회
   * @description 유저별 게시물 목록을 조회합니다.
   * @param id
   * @memberof PostService
   */
  async getPostListByUser(id: string) {
    const result = (await this._ajax
      .get<ResponseList<PostPreview>>(`/user/${id}/post`)
      .then(async (res) => {
        return await new Promise((resolve) => {
          setTimeout(() => {
            resolve({ data: res.data });
          }, 3500);
        });
        // return { data };
      })) as any;

    return result.data;
  }

  /**
   * @method GET
   * @summary 태그별 게시물 목록 조회
   * @description 태그별 게시물 목록을 조회합니다.
   * @param id {태그 ID}
   * @memberof PostService
   */
  async getPostListByTag(id: string) {
    const { data } = await this._ajax.get<ResponseList<PostPreview>>(
      `/tag/${id}/post`
    );

    return data;
  }

  /**
   * @summary 게시물 상세 조회
   * @method GET
   * @param id
   * @returns
   * @memberof PostService
   */
  async getPostById(id: string) {
    const { data } = await this._ajax.get<PostDetail>(`/post/${id}`);

    return data;
  }

  /**
   * @summary 게시물 생성
   * @method POST
   * @param {Partial<PostDetail>} post
   * @return {*}
   * @memberof PostService
   */
  async createPost(post: Partial<CreatePost>) {
    const { data } = await this._ajax.post<ICreatePostResponse>(
      "/post/create",
      post
    );

    return data;
  }

  /**
   * @summary 게시물 수정
   * @method PUT
   * @param {string} id
   * @param {Partial<PostDetail>} post
   * @return {*}
   * @memberof PostService
   */
  async updatePost(id: string, post: Partial<PostDetail>) {
    const { data } = await this._ajax.put<PostDetail>(`/post/${id}`, post);

    return data;
  }

  /**
   * @summary 게시물 삭제
   * @method DELETE
   * @param {string} id
   * @return {*}
   * @memberof PostService
   */
  async deletePost(id: string) {
    const { data } = await this._ajax.delete<string>(`/post/${id}`);

    return data;
  }
}

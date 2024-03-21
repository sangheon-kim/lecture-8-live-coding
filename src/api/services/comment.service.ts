import axios, { AxiosInstance } from "axios";

export class CommentService {
  constructor(private _ajax: AxiosInstance = axios) {}

  /**
   * @method GET
   * @summary 댓글 목록 조회
   * @description 댓글 목록을 조회합니다.
   * @memberof CommentService
   *
   *
   */
  async getCommentList() {
    const { data } = await this._ajax.get<ResponseList<IComment>>("/comment");

    return data;
  }

  /**
   * @method GET
   * @summary 게시물별 댓글 목록 조회
   * @description 게시물별 댓글 목록을 조회합니다.
   * @param id {postID}
   * @memberof CommentService
   */
  async getCommentListByPost(id: string) {
    const { data } = await this._ajax.get<ResponseList<IComment>>(
      `/post/${id}/comment`
    );

    return data;
  }

  /**
   * @method GET
   * @summary 유저별 댓글 목록 조회
   * @description 유저별 댓글 목록을 조회합니다.
   * @param id {userID}
   * @memberof CommentService
   */
  async getCommentListByUser(id: string) {
    const { data } = await this._ajax.get<ResponseList<IComment>>(
      `/user/${id}/comment`
    );

    return data;
  }

  /**
   * @summary 댓글 생성
   * @method POST
   * @param {Partial<IComment>} comment
   * @return {*}
   * @memberof CommentService
   */
  async createComment(comment: Partial<IComment>) {
    const { data } = await this._ajax.post<IComment>(
      "/comment/create",
      comment
    );

    return data;
  }

  /**
   * @summary 댓글 삭제
   * @method DELETE
   * @param {string} id
   * @return {*}
   * @memberof CommentService
   */
  async deleteComment(id: string) {
    const { data } = await this._ajax.delete<string>(`/comment/${id}`);

    return data;
  }
}

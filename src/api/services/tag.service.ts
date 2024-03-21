import axios, { AxiosInstance } from "axios";

export class TagService {
  constructor(private _ajax: AxiosInstance = axios) {}

  /**
   *
   * @summary 태그 목록 조회
   * @method GET
   * @returns
   */
  async getTagList() {
    const { data } = await this._ajax.get<ResponseList<string>>("/tag");

    return data;
  }
}

import axios, { AxiosInstance } from "axios";

export class UserService {
  constructor(private _ajax: AxiosInstance = axios) {}

  /**
   * @method GET
   * @summary 유저 정보 조회
   * @description 유저 정보를 조회합니다.
   * @memberof UserService
   */
  async getUserList() {
    const { data } = await this._ajax.get<ResponseList<IUserPreview>>("/user");

    return data;
  }

  /**
   *
   * @method GET
   * @summary 유저 상세 조회
   * @description 유저 상세 정보를 조회합니다.
   * @param id
   * @returns
   * @memberof UserService
   */
  async getUserById(id: string) {
    const { data } = await this._ajax.get<UserDetail>(`/user/${id}`);

    return data;
  }

  /**
   *
   * @summary 유저 생성
   * @method POST
   * @param {Partial<UserDetail>} user
   * @return {*}
   * @memberof UserService
   */
  async createUser(user: Partial<UserDetail>) {
    const { data } = await this._ajax.post<UserDetail>("/user/create", user);

    return data;
  }

  /**
   *
   * @summary 유저 정보 수정
   * @method PUT
   * @param {string} id
   * @param {Partial<UserDetail>} user
   * @return {*}
   * @memberof UserService
   */
  async updateUser(id: string, user: Partial<UserDetail>) {
    const { data } = await this._ajax.put<UserDetail>(`/user/${id}`, user);

    return data;
  }

  /**
   *
   * @summary 유저 삭제
   * @method DELETE
   * @param id
   * @returns
   * @memberof UserService
   */
  async deleteUser(id: string) {
    const { data } = await this._ajax.delete<string>(`/user/${id}`);

    return data;
  }
}

declare type ResponseList<T> = {
  data: T[];
  total: number;
  page: number;
  limit: number;
};

declare type IUserPreview = Pick<
  UserDetail,
  "id" | "title" | "firstName" | "lastName" | "picture"
>;

declare type ILocation = {
  /** 거리 */
  street: string;
  /** 도시 */
  city: string;
  /** 주 */
  state: string;
  /** 국가 */
  country: string;
  /** 타임 존 */
  timezone: string;
};

declare type UserDetail = {
  /** 유저 ID  */
  id: string;
  /** "mr", "ms", "mrs", "miss", "dr", "" */
  title: "mr" | "ms" | "mrs" | "miss" | "dr" | "";
  /** 이름 */
  firstName: string;
  /** 성 */
  lastName: string;
  /** 성별 */
  gender: string;
  /** 이메일 */
  email: string;
  /** 유저 생년월일 */
  dateOfBirth: string;
  /** 유저 가입일 */
  registerDate: string;
  /** 유저 핸드폰 번호 */
  phone: string;
  /** 유저 이미지 */
  picture: string;
  /** 유저 위치 정보 */
  location: ILocation;
};

declare type ICreatePostResponse = Omit<PostPreview, "id" | "publishDate">;

declare type PostPreview = Omit<PostDetail, "link">;

declare type PostDetail = {
  /** 게시글 ID */
  id: string;
  /** 게시글 내용 */
  text: string;
  /** 게시글 이미지 */
  image: string;
  /** 게시글 좋아요 수 */
  likes: number;
  /** 게시글 링크 */
  link: string;
  /** 게시글 태그 */
  tags: Array<string>;
  /** 게시글 작성일 */
  publishDate: string;
  /** 게시글 작성자 */
  owner: string;
};

declare type CreateCommentResponse = Omit<Comment, "publishDate" | "id">;

declare type IComment = {
  /** Comment ID */
  id: string;
  /** Comment message */
  message: string;
  /** User  */
  owner: IUserPreview;
  /** Post id */
  post: string;
  /** Comment date */
  publishDate: string;
};

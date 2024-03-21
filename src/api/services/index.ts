import { socialDummyInstance } from "../instances/socialDummyApi";
import { weatherMapInstance } from "../instances/weatherMapInstance";
import { CommentService } from "./comment.service";
import { PostService } from "./post.service";
import { TagService } from "./tag.service";
import { UserService } from "./user.service";
import { WeatherService } from "./weather.service";

export const userSerivce = new UserService(socialDummyInstance);
export const tagService = new TagService(socialDummyInstance);
export const postService = new PostService(socialDummyInstance);
export const commentService = new CommentService(socialDummyInstance);
export const weatherService = new WeatherService(weatherMapInstance);

// export const rawUserSerivce = new UserService();
// export const rawTagService = new TagService();
// export const rawPostService = new PostService();
// export const rawCommentService = new CommentService();

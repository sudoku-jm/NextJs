import { PostImage } from "./PostImage";
import { User } from "./User";

//interface : 객체 타입에 자주 사용
export interface Post {
    postId: number;
    User: User;
    content: string;
    createdAt: Date;
    Images: PostImage[]; //postImage의 배열
}

import style from "./singlePost.module.css";
import BackButton from "@/app/(afterLogin)/_component/BackButton";
import Post from "@/app/(afterLogin)/_component/Post";
import CommentForm from "@/app/(afterLogin)/[username]/status/[id]/_component/CommentForm";

//게시글 상세 페이지
export default function SinglePost() {
    return (
        <div className={style.main}>
            <div className={style.header}>
                <BackButton />
                <h3 className={style.headerTitle}>게시하기</h3>
            </div>
            <Post />
            {/* 댓글폼(s) */}
            <CommentForm />
            {/* 댓글폼(e) */}
            <div>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
}

import PhotoModalCloseButton from "@/app/(afterLogin)/@modal/[username]/status/[id]/photo/[photoId]/_component/PhotoModalCloseButton";
import ActionButtons from "@/app/(afterLogin)/_component/ActionButton";
import Post from "@/app/(afterLogin)/_component/Post";
import CommentForm from "@/app/(afterLogin)/[username]/status/[id]/_component/CommentForm";
import style from "./photoModal.module.css";
import { faker } from "@faker-js/faker";

// 진짜 사용하는 모달 페이지
export default function Default() {
    const photo = {
        imageId: 1,
        link: faker.image.urlLoremFlickr(),
        Post: {
            content: faker.lorem.text(),
        },
    };
    return (
        <div className={style.container}>
            {/* 닫기 버튼 */}
            <PhotoModalCloseButton />
            {/* 이미지나오는곳 (좌)*/}
            <div className={style.imageZone}>
                <img src={photo.link} alt={photo.Post?.content} />
                <div
                    className={style.image}
                    style={{ backgroundImage: `url(${photo.link})` }}
                />
                <div className={style.buttonZone}>
                    <div className={style.buttonInner}>
                        {/* 하단에 나오는 버튼 : 댓글수, 팔로우, 좋아요 버튼란 */}
                        {/* white라는 props를 내려줘서 스타일 변경 */}
                        <ActionButtons white />
                    </div>
                </div>
            </div>
            {/* 댓글 나오는 곳 (우)*/}
            <div className={style.commentZone}>
                {/* 이미지가 안보이는 post noImage가 들어간 Post는 이미지가 안뜬다 */}
                <Post noImage />
                <CommentForm />
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

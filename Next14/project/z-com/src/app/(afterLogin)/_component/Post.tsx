import Link from "next/link";
import style from "./post.module.css";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import ActionButtons from "@/app/(afterLogin)/_component/ActionButton";
import PostArticle from "@/app/(afterLogin)/_component/PostArticle";
import PostImages from "@/app/(afterLogin)/_component/PostImages";
import { faker } from "@faker-js/faker";
import { Post } from "@/model/Post";

dayjs.locale("ko");
dayjs.extend(relativeTime);

type Props = {
    noImage?: boolean; //props가 있을수도있고 없을수도있으므로
    post: Post;
};

export default function Post({ noImage, post }: Props) {
    const target = post; //서버에서 가지고온 데이터

    //post에 이미지를 넣거나 안넣거나 반반 확률
    if (Math.random() > 0.5 && !noImage) {
        target.Images.push({ imageId: 1, link: faker.image.urlLoremFlickr() });
        target.Images.push({ imageId: 2, link: faker.image.urlLoremFlickr() });
        target.Images.push({ imageId: 3, link: faker.image.urlLoremFlickr() });
        target.Images.push({ imageId: 4, link: faker.image.urlLoremFlickr() });
    }

    return (
        <PostArticle post={target}>
            <div className={style.postWrapper}>
                <div className={style.postUserSection}>
                    <Link
                        href={`/${target.User.id}`}
                        className={style.postUserImage}
                    >
                        <img
                            src={target.User.image}
                            alt={target.User.nickname}
                        />
                        <div className={style.postShade} />
                    </Link>
                </div>
                <div className={style.postBody}>
                    <div className={style.postMeta}>
                        <Link href={`/${target.User.id}`}>
                            <span className={style.postUserName}>
                                {target.User.nickname}
                            </span>
                            &nbsp;
                            <span className={style.postUserId}>
                                @{target.User.id}
                            </span>
                            &nbsp; · &nbsp;
                        </Link>
                        <span className={style.postDate}>
                            {dayjs(target.createdAt).fromNow(true)}
                        </span>
                    </div>
                    <div>{target.content}</div>
                    <div className={style.postImageSection}>
                        <PostImages post={target} />
                    </div>
                    <ActionButtons />
                </div>
            </div>
        </PostArticle>
    );
}

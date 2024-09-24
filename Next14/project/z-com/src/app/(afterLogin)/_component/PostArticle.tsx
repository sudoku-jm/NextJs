"use client";
import { ReactNode } from "react";
import style from "./post.module.css";
import { useRouter } from "next/navigation";
/*
postId : 1,
User: {
    id: "elonmusk",
    nickname: "Elon Musk",
    image: "/yRsRRjGO.jpg",
},
content: "클론코딩 라이브로 하니 너무 힘들어요 ㅠㅠ",
createdAt: new Date(),
Images: [],
    */
type Props = {
    children: ReactNode;
    post: {
        postId: number;
        User: {
            id: string;
            nickname: string;
            image: string;
        };
        content: string;
        createdAt: Date;
        Images: any[]; //아무 배열이나 다 된다.
    };
};

export default function PostArticle({ children, post }: Props) {
    const router = useRouter();
    const onclick = ({}) => {
        router.push(`/${post.User.id}/status/${post.postId}`);
    };
    return (
        <article onClickCapture={onclick} className={style.post}>
            {children}
        </article>
    );
}

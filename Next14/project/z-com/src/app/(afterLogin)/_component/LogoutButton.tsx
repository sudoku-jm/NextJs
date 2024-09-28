"use client";
import { signOut, useSession } from "next-auth/react";
import style from "./logoutButton.module.css";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
    // const me = {
    //     // 임시로 내 정보 있는것처럼
    //     id: "zerohch0",
    //     nickname: "제로초",
    //     image: "/5Udwvqim.jpg",
    // };

    //내 정보 불러오기
    const { data: me } = useSession(); //클라이언트에서만 쓰는 것.
    console.log("me", me);
    const router = useRouter();
    const onLogout = () => {
        signOut({
            redirect: false, //서버쪽 리다이렉트는 꺼준다.
        }).then(() => {
            //클라이언트쪽에서 리다이렉트
            router.replace("/");
        });
    };

    if (!me?.user) {
        //내 정보가 없으면 로그아웃버튼 숨김
        return null;
    }
    return (
        <button className={style.logOutButton} onClick={onLogout}>
            <div className={style.logOutUserImage}>
                {/* <img src={me.user?.image!} alt={me.user?.id} /> 또는 */}
                <img
                    src={me.user?.image as string}
                    alt={me.user?.email as string}
                />
            </div>
            <div className={style.logOutUserName}>
                <div>{me.user?.name}</div>
                <div>@{me.user?.email}</div>
            </div>
        </button>
    );
}

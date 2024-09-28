"use client";

import Main from "@/app/(beforeLogin)/_component/Main";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
//로그인 페이지.
export default function Login() {
    const router = useRouter();
    const { data: session } = useSession();
    if (session?.user) {
        //로그인 한 상태에 해당 페이지 접근 시 /home으로 리다이렉트
        router.replace("/home");
        return null;
    }
    router.replace("/i/flow/login");
    return <Main />;
}

// router.push
// 뒤로가기하면 /login으로 감
// localhost:3000/login -> localhost:3000/i/flow/login

// router.replace
// 뒤로가기하면 /login보다 전으로 간다.
// localhost:3000/login -> localhost:3000/i/flow/login

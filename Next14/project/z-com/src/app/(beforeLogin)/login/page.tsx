"use client";

import Main from "@/app/(beforeLogin)/_component/Main";
import { useRouter } from "next/navigation";
export default function Login() {
    const router = useRouter();
    router.replace('/i/flow/login');
    return <Main/>;

}


// router.push
// 뒤로가기하면 /login으로 감
// localhost:3000/login -> localhost:3000/i/flow/login

// router.replace
// 뒤로가기하면 /login보다 전으로 간다.
// localhost:3000/login -> localhost:3000/i/flow/login
"use server"; //서버액션 Server Action

import { redirect } from "next/navigation";
export default async (prevState: any, formData: FormData) => {
    //데이터 검증
    // id, name, password의 경우는 string인것을 보장해서 trim()시킨다.
    if (!formData.get("id") || !(formData.get("id") as string)?.trim()) {
        return { message: "no_id" };
    }
    if (!formData.get("name") || !(formData.get("name") as string)?.trim()) {
        return { message: "no_name" };
    }
    if (
        !formData.get("password") ||
        !(formData.get("password") as string)?.trim()
    ) {
        return { message: "no_password" };
    }
    if (!formData.get("image")) {
        return { message: "no_image" };
    }

    let shouldRedirect = false;
    try {
        //서버로 요청
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/users`,
            {
                method: "post",
                body: formData,
                credentials: "include", //이렇게 해야 쿠키가 전달이 된다.
            }
        );

        console.log(response.status);

        if (response.status == 403) {
            //이미 가입한 아이디가 있는 경우.
            return { message: "user_exists" };
        }

        console.log(await response.json());
        shouldRedirect = true;
    } catch (err) {
        console.error(err);
        return; //에러의 경우 아래 실행 안함
    }

    if (shouldRedirect) {
        redirect("/home");
        return undefined;
    }
};

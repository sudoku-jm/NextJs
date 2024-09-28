import Main from "@/app/(beforeLogin)/_component/Main";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
//로그인 안했을 때.
export default async function Home() {
    //서버컴포넌트에서 로그인체크는 auth() 로 가지고 올 수 있다.
    //import { auth } from "@/auth";로 사용
    //useSession의 서버버전
    const session = await auth();
    if (session?.user) {
        redirect("/home");
    }
    return <Main />;
}

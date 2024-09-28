import { auth } from "./auth";
import { NextResponse } from "next/server";
/*
export { auth as middleware } from "./auth";는
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/home', request.url))
}과 같다
*/

//로그아웃 했을 때 로그인 필요 페이지를 막는 방법.
export async function middleware() {
    const session = await auth();
    if (!session) {
        return NextResponse.redirect("http://localhost:3000/i/flow/login");
    }
}

export const config = {
    //미들웨어를 적용할 라우트
    // 공통점 : 로그인을 해야지 접근할 수 있다.
    matcher: ["/compose/tweet", "/home", "/explore", "/messages", "/search"],
};

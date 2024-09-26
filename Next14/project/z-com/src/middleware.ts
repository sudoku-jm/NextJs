export { auth as middleware } from "./auth";
/*
export { auth as middleware } from "./auth";는
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/home', request.url))
}과 같다
*/
export const config = {
    //미들웨어를 적용할 라우트
    // 공통점 : 로그인을 해야지 접근할 수 있다.
    matcher: ["/compose/tweet", "/home", "/explore", "/messages", "/search"],
};

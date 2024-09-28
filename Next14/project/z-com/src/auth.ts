import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const {
    handlers: { GET, POST },
    auth,
    signIn,
} = NextAuth({
    pages: {
        signIn: "i/flow/login",
        newUser: "i/flow/signup",
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                const authResponse = await fetch(
                    `${process.env.NEXT_PUBLIC_BASE_URL}/api/login`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            //credentials에는 아이디 창에서 입력하는 유저네임, 패스워드가 들어있다.
                            //credentials username, password로 이름이 고정이라 id,password로 한 번 더 바꿔줌
                            id: credentials.username,
                            password: credentials.password,
                        }),
                    }
                );
                if (!authResponse.ok) {
                    //로그인 실패
                    return null;
                }

                //로그인 성공
                const user = await authResponse.json();
                console.log("user>>>", user);
                return {
                    email: user.id,
                    name: user.nickname, //typescript에서 에러가나서 이런식으로 우회
                    image: user.image,
                    ...user,
                }; //로그인 한 유저정보를 리턴해서 내려준다.
            },
        }),
    ],
});

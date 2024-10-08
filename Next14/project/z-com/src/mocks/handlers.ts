import { http, HttpResponse, StrictResponse } from "msw";
import { faker } from "@faker-js/faker";

function generateDate() {
    //랜덤 날짜
    const lastWeek = new Date(Date.now());
    lastWeek.setDate(lastWeek.getDate() - 7);
    return faker.date.between({
        from: lastWeek,
        to: Date.now(),
    });
}

//임의 데이터 작성자
const User = [
    { id: "elonmusk", nickname: "Elon Musk", image: "/yRsRRjGO.jpg" },
    { id: "zerohch0", nickname: "제로초", image: "/5Udwvqim.jpg" },
    { id: "leoturtle", nickname: "레오", image: faker.image.avatar() },
];

export const handlers = [
    http.post("/api/login", () => {
        console.log("로그인");
        //응답내용
        return HttpResponse.json(User[1], {
            headers: {
                "Set-Cookie": "connect.sid=msw-cookie;HttpOnly;Path=/",
            },
        });
    }),
    http.post("/api/logout", () => {
        console.log("로그아웃");
        return new HttpResponse(null, {
            headers: {
                "Set-Cookie": "connect.sid=;HttpOnly;Path=/;Max-Age=0",
            },
        });
    }),
    http.post("/api/users", async ({}) => {
        console.log("회원가입");
        // return HttpResponse.text(JSON.stringify('user_exists'), {
        //   status: 403,
        // })
        return HttpResponse.text(JSON.stringify("ok"), {
            headers: {
                "Set-Cookie": "connect.sid=msw-cookie;HttpOnly;Path=/",
            },
        });
    }),
    http.get("/api/postRecommends", ({ request }) => {
        const url = new URL(request.url);
        const cursor = parseInt(url.searchParams.get("cursor") as string) || 0;
        return HttpResponse.json([
            {
                postId: cursor + 1,
                User: User[0],
                content: `${
                    cursor + 1
                } Z.com is so marvelous. I'm gonna buy that.`,
                Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
                createdAt: generateDate(),
            },
            {
                postId: cursor + 2,
                User: User[0],
                content: `${
                    cursor + 2
                } Z.com is so marvelous. I'm gonna buy that.`,
                Images: [
                    { imageId: 1, link: faker.image.urlLoremFlickr() },
                    { imageId: 2, link: faker.image.urlLoremFlickr() },
                ],
                createdAt: generateDate(),
            },
            {
                postId: cursor + 3,
                User: User[0],
                content: `${
                    cursor + 3
                } Z.com is so marvelous. I'm gonna buy that.`,
                Images: [],
                createdAt: generateDate(),
            },
            {
                postId: cursor + 4,
                User: User[0],
                content: `${
                    cursor + 4
                } Z.com is so marvelous. I'm gonna buy that.`,
                Images: [
                    { imageId: 1, link: faker.image.urlLoremFlickr() },
                    { imageId: 2, link: faker.image.urlLoremFlickr() },
                    { imageId: 3, link: faker.image.urlLoremFlickr() },
                    { imageId: 4, link: faker.image.urlLoremFlickr() },
                ],
                createdAt: generateDate(),
            },
            {
                postId: cursor + 5,
                User: User[0],
                content: `${
                    cursor + 5
                } Z.com is so marvelous. I'm gonna buy that.`,
                Images: [
                    { imageId: 1, link: faker.image.urlLoremFlickr() },
                    { imageId: 2, link: faker.image.urlLoremFlickr() },
                    { imageId: 3, link: faker.image.urlLoremFlickr() },
                ],
                createdAt: generateDate(),
            },
        ]);
    }),
    http.get("/api/followingPosts", ({ request }) => {
        return HttpResponse.json([
            {
                postId: 1,
                User: User[0],
                content: `${1} Stop following me. I'm too famous.`,
                Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
                createdAt: generateDate(),
            },
            {
                postId: 2,
                User: User[0],
                content: `${2} Stop following me. I'm too famous.`,
                Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
                createdAt: generateDate(),
            },
            {
                postId: 3,
                User: User[0],
                content: `${3} Stop following me. I'm too famous.`,
                Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
                createdAt: generateDate(),
            },
            {
                postId: 4,
                User: User[0],
                content: `${4} Stop following me. I'm too famous.`,
                Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
                createdAt: generateDate(),
            },
            {
                postId: 5,
                User: User[0],
                content: `${5} Stop following me. I'm too famous.`,
                Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
                createdAt: generateDate(),
            },
        ]);
    }),
    http.get("/api/search/:tag", ({ request, params }) => {
        //:tag 는 URL파라미터라고 부름 [슬러그]같이 값이 바뀔 수 있는 곳
        const { tag } = params;
        return HttpResponse.json([
            {
                postId: 1,
                User: User[0],
                content: `${1} 검색결과 ${tag}`,
                Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
                createdAt: generateDate(),
            },
            {
                postId: 2,
                User: User[0],
                content: `${2} 검색결과 ${tag}`,
                Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
                createdAt: generateDate(),
            },
            {
                postId: 3,
                User: User[0],
                content: `${3} 검색결과 ${tag}`,
                Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
                createdAt: generateDate(),
            },
            {
                postId: 4,
                User: User[0],
                content: `${4} 검색결과 ${tag}`,
                Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
                createdAt: generateDate(),
            },
            {
                postId: 5,
                User: User[0],
                content: `${5} 검색결과 ${tag}`,
                Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
                createdAt: generateDate(),
            },
        ]);
    }),
];

//여기서 데이터를 불러온다
export async function getFolloingPosts() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/followingPosts`,
        {
            next: {
                tags: ["posts", "followings"],
            },
            credentials: "include",
            cache: "no-store",
        }
    );
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }

    /*
        revalidateTag(”recommends”) 라고 쓰면 서버에 있는 캐시가 날아간다.
        revalidatePath("/home"); 이라고 쓰면 해당 페이지와 관련된 요청을 새로 고침한다.
    */

    return res.json();
}

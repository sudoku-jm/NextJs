import { QueryFunction } from "@tanstack/query-core";
import { Post } from "@/model/Post";
//여기서 데이터를 불러온다
//queryKey로 넘긴 파라미터를 가져올 수 있다.
/*
SearchResult.tsx에서 
queryKey로 적은 ["posts", "search", searchParams] 값을 받아올 수 있다.

구조분해 할당으로 가져올수도있다.
const [_1, _2, searchParams] = queryKey;

----
QueryFunction은 react-query에서 제공하는 타입으로, 쿼리 함수를 정의할 때 사용
QueryFunction<TData, TQueryKey>
- TData: 쿼리가 성공했을 때 반환될 데이터의 타입입니다.
- TQueryKey: 쿼리 키(queryKey)의 타입입니다.

Post[] : Post 타입의 객체가 여러 개 담긴 배열을 반환.
queryKey는 ["posts", "search", { q: string, pf?: string, f?: string }]처럼 생긴 배열이어야한다.
----

리액트 쿼리에서는
queryKey: ["posts", "search", searchParams],
searchParams와 같이 객체가 통째로 넘어갈 수 있는데

넥스트Next의 태그에서는 객체가 들어갈 수 없다.
 next: {
    tags: ["posts", "search", searchParams.q],
},
searchParams.q 와 같이 문자열을 넣어줘야한다.

*/
export const getSearchResult: QueryFunction<
    Post[],
    [
        _1: string,
        _2: string,
        searchParams: { q: string; pf?: string; f?: string }
    ]
> = async ({ queryKey }) => {
    const [_1, _2, searchParams] = queryKey;
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/search/${
            searchParams.q
        }?${searchParams.toString()}`,
        {
            next: {
                tags: ["posts", "search", searchParams.q],
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

    return res.json();
};

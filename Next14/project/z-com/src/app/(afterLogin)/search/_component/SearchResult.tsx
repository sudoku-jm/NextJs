"use client";
import { Post as IPost } from "@/model/Post";
import Post from "@/app/(afterLogin)/_component/Post";
import { useQuery } from "@tanstack/react-query";
import { getSearchResult } from "@/app/(afterLogin)/search/_lib/getSearchResult";

/*
useQuery< IPost[], Object, IPost[], [_1: string, _2: string, Props["searchParams"]] >

타입스크립트 해석.

-첫 번째는 쿼리 결과로 반환될 데이터의 타입.

-두 번째는 에러 타입. useQuery가 실패했을 때 반환하는 에러의 타입

-세 번째는 캐시에 저장될 데이터 타입. 쿼리가 성공적으로 실행된 후 캐시에 저장된 데이터가 이 타입

-네 번째는 queryKey의 타입 배열입니다. 여기서 queryKey는 배열 형태로, 첫 번째와 두 번째 요소는 string이고 세 번째 요소는 Props["searchParams"] 타입이라는 것을 정의.즉, queryKey로는 ["posts", "search", searchParams] 같은 형태의 배열이 전달된다는 의미
*/
type Props = {
    searchParams: { q: string; f?: string; pf?: string };
};
export default function SearchResult({ searchParams }: Props) {
    const { data } = useQuery<
        IPost[],
        Object,
        IPost[],
        [_1: string, _2: string, Props["searchParams"]]
    >({
        queryKey: ["posts", "search", searchParams], //여기서 넘어가는 파라미터는
        queryFn: getSearchResult, //key에 적은 파라미터는 여기로 넘어간다.
        staleTime: 60 * 1000,
        gcTime: 300 * 1000,
    });
    return data?.map((post) => <Post key={post.postId} post={post} />);
}

"use client";

import { useQuery } from "@tanstack/react-query";
import { getPostRecommends } from "@/app/(afterLogin)/home/_lib/getPostRecommends";
import Post from "@/app/(afterLogin)/_component/Post";
import { Post as IPost } from "@/model/Post";
export default function PostRecommends() {
    /*
        React Query Provider(RQProvider)안에서는 useQuery 사용가능.
         queryKey:가지고 올 데이터 쿼리키 입력.
         queryFn : _lib폴더에 빼놓은 getPostRecommends 함수로 호출

    */
    const { data } = useQuery<IPost[]>({
        queryKey: ["posts", "recommends"],
        queryFn: getPostRecommends,
        staleTime: 60 * 1000, // number초 뒤에 바로 fresh에서 stale로 변경. 시간은 밀리세컨 60 * 1000 = 1분 | Infinity = 항상 fresh. 한번 가지고 오면 다시 새로고침 안함 계속 캐시에서 가지고 옴.
        gcTime: 300 * 1000, // 캐시타입. 가비지컬렉터타임. 기본 5분
        initialData: () => [], //초기 데이터
    });

    return data?.map((post) => <Post key={post.postId} post={post} />);
}

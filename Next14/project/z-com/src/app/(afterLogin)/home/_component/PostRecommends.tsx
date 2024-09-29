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
    });

    return data?.map((post) => <Post key={post.postId} post={post} />);
}

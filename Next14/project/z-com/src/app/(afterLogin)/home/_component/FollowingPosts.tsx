"use client";

import { useQuery } from "@tanstack/react-query";
import { getFolloingPosts } from "@/app/(afterLogin)/home/_lib/getFolloingPosts";
import Post from "@/app/(afterLogin)/_component/Post";
import { Post as IPost } from "@/model/Post";
export default function FollowingPosts() {
    const { data } = useQuery<IPost[]>({
        queryKey: ["posts", "followings"],
        queryFn: getFolloingPosts,
        staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
        gcTime: 300 * 1000,
    });

    return data?.map((post) => <Post key={post.postId} post={post} />);
}

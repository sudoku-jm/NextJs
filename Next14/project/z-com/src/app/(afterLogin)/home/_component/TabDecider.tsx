"use client"; //useContext 사용하려면 클라이언트 컴포넌트
import { useContext } from "react";
import { TabContext } from "./TabProvider";
import PostRecommends from "@/app/(afterLogin)/home/_component/PostRecommends";
import FollowingPosts from "@/app/(afterLogin)/home/_component/FollowingPosts";

//tab 값에 따라 리스트가 달라짐
export default function TabDecider() {
    const { tab } = useContext(TabContext);
    if (tab === "rec") {
        return <PostRecommends />;
    }
    return <FollowingPosts />;
}

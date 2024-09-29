import Tab from "@/app/(afterLogin)/home/_component/Tab";
import PostForm from "@/app/(afterLogin)/home/_component/PostForm";
import style from "./home.module.css";
import TabProvider from "@/app/(afterLogin)/home/_component/TabProvider";
import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
} from "@tanstack/react-query";
import PostRecommends from "@/app/(afterLogin)/home/_component/PostRecommends";
import { getPostRecommends } from "@/app/(afterLogin)/home/_lib/getPostRecommends";

// /home 페이지

export default async function Home() {
    const queryClient = new QueryClient(); //서버에서 불러온 데이터를 클라이언트의 react query가 넘겨받는다.

    /*아래와 같이 객체 형식으로 넣어야한다.
        queryKey :  ["posts", "recommends"]이런 key를 가지고 있는 애는
        queryFn : getPostRecommend를 실행해서 값을 가져와라.

        이렇게 가지고 온 값은 똑같이 key를 넣어서
        queryClient.getQueryData(["posts", "recommends"])로 데이터를 가지고 온다.
        key가 문자열이 아니라 배열 형태라는게 특징.
    */
    await queryClient.prefetchQuery({
        queryKey: ["posts", "recommends"],
        queryFn: getPostRecommends,
    });

    //hydrate라는 거는 서버에서 온 데이터를 클라이언트에서 그대로 형식 맞춰 물려받는 것.
    const dehydratedState = dehydrate(queryClient);

    queryClient.getQueryData(["posts", "recommends"]);
    //수정 setQueryData
    //queryClient.setQueryData(["posts", "recommends"], 수정...);
    /*
        나중에 데이터가 필요할 때는 어떤 컴포넌트든 QRProvider내부에 있으면 불러올 수 있다.
    */
    return (
        <main className={style.main}>
            <HydrationBoundary state={dehydratedState}>
                <TabProvider>
                    <Tab />
                    <PostForm />
                    <PostRecommends />
                </TabProvider>
            </HydrationBoundary>
        </main>
    );
}

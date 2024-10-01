"use client";

import React, { useState } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

type Props = {
    children: React.ReactNode;
};

function RQProvider({ children }: Props) {
    //클라이언트를 먼저 만들어 준다.
    const [client] = useState(
        new QueryClient({
            defaultOptions: {
                // react-query 전역 설정. 또는 useQuery에서 설정을 따로따로 줄 수 있다.
                queries: {
                    refetchOnWindowFocus: false, //window focus 다른탭 갔다가 돌아왔을 때 데이터 새로 가져옴.
                    retryOnMount: true, //컴포넌트가 unmount되었다가 mount되었을 경우. react가 올라간 순간. 데이터를 새로 가져옴. 페이지 이동되고 컴포넌트가 마운트 되는 순간 다시 데이터를 가져온다.
                    refetchOnReconnect: false, //인터넷연결이 끊겼다가 다시 접속이 되는 순간 데이터를 새로 가져옴.
                    retry: false, //데이터를 가져오다가 실패하면 몇 번 정도 재시도 할 수 있는 옵션.
                },
            },
        })
    );

    return (
        <QueryClientProvider client={client}>
            {children}
            {/*  ReactQueryDevtools: React devTool을 띄울지말지 정하는 옵션.*/}
            <ReactQueryDevtools
                initialIsOpen={process.env.NEXT_PUBLIC_MODE === "local"}
            />
        </QueryClientProvider>
    );
}

export default RQProvider;

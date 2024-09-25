"use client";
import { useEffect } from "react";

export const MSWComponent = () => {
    useEffect(() => {
        //window가 존재할 때
        if (typeof window !== "undefined") {
            //개발환경인지 여부 체크
            if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
                require("@/mocks/browser");
            }
        }
    }, []);

    return null;
};

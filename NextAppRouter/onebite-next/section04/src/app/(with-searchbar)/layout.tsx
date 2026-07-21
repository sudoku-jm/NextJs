import { ReactNode, Suspense } from "react";
import Searchbar from "../../components/searchbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      {/* 오직 클라이언트측에서만 실행. 사전렌더링에서는 배제되고 오직 클라이언트측에서만 렌더링되는 컴포넌트 설정이 됨., */}
      <Suspense fallback={<div>Loading...</div>}>
        <Searchbar />
      </Suspense>
      {children}
    </div>
  );
}

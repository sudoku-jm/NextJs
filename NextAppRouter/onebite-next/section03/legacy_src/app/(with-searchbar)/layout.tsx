import { ReactNode } from "react";
import Searchbar from "../../components/searchbar";

// /search로 시작되는 모든 페이지에 자동으로 적용될 것.
export default function Layout({
  children,
  //children 이라는 props를 가져오자
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div>
      <Searchbar />
      {children}
      {/* 페이지 컴포넌트를 children이라는 props로 받아오도록 설정함 */}
    </div>
  );
}

// type LayoutProps = {
//   children : ReactNode
// };

// export default function Layout({children} : Readonly<LayoutProps>){
//   return <div>
//       <div>임시 서치바</div>
//       {children}
//   </div>
// }

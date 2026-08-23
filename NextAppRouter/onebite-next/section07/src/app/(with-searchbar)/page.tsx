import BookItem from "@/components/book-item";
import style from "./page.module.css";
import { BookData } from "@/types";
import { delay } from "../../util/delay";
import { Suspense } from "react";
import BookListSkeleton from "../../components/skeleton/book-list-skeleton";

//특정 페이지의 유형을 강제로 Static, Dynamic 페이지로 설정
/*
1.auto : 기본값 아무것도 강제하지 않음. 설정하지 않는 것과 같음. 페이지가 동적함수나 캐싱되지 않은 데이터 패칭을 쓰면 다이나믹 페이지. 그렇지 않으면 스태틱 페이지로 설정.
2.force-dynamic : 페이지를 강제로 Dynamic 페이지로 설정. 
3.force-static : 페이지를 강젝 Static 페이지로 설정.
4.error : 페이지를 강제로 static 페이지로 설정. (설정하면 안되는 이유 -> 빌드 오류)
*/
export const dynamic = "force-dynamic";

// 등록된 모든 도서 불러오기
async function AllBooks() {
  await delay(1500);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`,
    { cache: "force-cache" }, //강제로 캐시되도록 옵션 적용.
  );
  //캐시되지 않는 요청으로 설정
  // 인덱스 페이지 접속할 때마다 매번 새롭게 모든 도서의 데이터를 불러오게 됨.
  if (!response.ok) {
    //ok가 안난경우 간단히 예외처리. 요청 실패시.
    return <div>오류가 발생했습니다...</div>;
  }
  const allBooks: BookData[] = await response.json();

  return (
    <div>
      {allBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

// 추천 도서 불러오기
async function RecoBooks() {
  await delay(3000);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/random`,
    { next: { revalidate: 3 } },
  );
  // 3초마다 업데이트
  if (!response.ok) {
    return <div>오류가 발생했습니다...</div>;
  }
  const recoBooks: BookData[] = await response.json();
  return (
    <div>
      {recoBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>

        <Suspense fallback={<BookListSkeleton count={3} />}>
          <RecoBooks />
        </Suspense>
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        <Suspense fallback={<BookListSkeleton count={10} />}>
          <AllBooks />
        </Suspense>
      </section>
    </div>
  );
}

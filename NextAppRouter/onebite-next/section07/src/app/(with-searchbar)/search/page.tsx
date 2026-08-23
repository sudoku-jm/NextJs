import BookItem from "@/components/book-item";
import { BookData } from "@/types";
import { delay } from "../../../util/delay";
import { Suspense } from "react";
import BookListSkeleton from "../../../components/skeleton/book-list-skeleton";

// export const dynamic = "error";

async function SearchResult({ q }: { q: string }) {
  await delay(1500); //1.5초 지연을 일부러 시켜본다.
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${q}`,
    { cache: "force-cache" },
  );
  if (!response.ok) {
    return <div>오류가 발생했습니다...</div>;
  }
  const searchBook: BookData[] = await response.json();

  return (
    <div>
      {searchBook.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

// 도서 검색 서버컴포넌트
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  return (
    <Suspense key={q || ""} fallback={<BookListSkeleton count={3} />}>
      {/* q에 값이 없으면 "" 빈값 넘기기 */}
      <SearchResult q={q || ""} />
    </Suspense>
  );
}

// export default async function Page({
//   searchParams,
// }: {
//   searchParams: { q?: string };
// }) {
//   const response = await fetch(
//     `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${searchParams.q}`,
//   );
//   if (!response.ok) {
//     return <div>오류가 발생했습니다...</div>;
//   }
//   const books: BookData[] = await response.json();

//   return (
//     <div>
//       {books.map((book) => (
//         <BookItem key={book.id} {...book} />
//       ))}
//     </div>
//   );
// }

import BookItem from "@/components/book-item";
import { BookData } from "@/types";

// 도서 검색 서버컴포넌트
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
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

"use client";
import { useRouter } from "next/navigation";
import { startTransition, useEffect } from "react";

//클라이언트 컴포넌트로써 설정
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  /*
  error : 
  타입은 JS의 기본적으로 존재하는 Error타입으로 정의하면 됨.
  자바스크립트의 에러 타입의 객체를 props로 에러 컴포넌트에게 전달해준다.
  */
  /*
  reset : 
  타입은 어떠한 매개변수도 전달받지 않고, 어떠한 값도 반환하지 않는 void타입의 리턴하는 함수
 */
  const router = useRouter();
  useEffect(() => {
    //message라는 프로퍼티가 있으니 그걸 출력해본다.
    console.error(error.message);
  }, [error]);
  return (
    <div>
      <h3>오류가 발생했습니다.</h3>
      <button
        onClick={() => {
          startTransition(() => {
            router.refresh();
            reset();
          });
        }}
      >
        다시 시도
      </button>
    </div>
  );
}

// 전달받은 시간(ms) 동안 기다렸다가 빈 문자열("")로 Promise를 이행(resolve)하여 비동기 지연을 발생시키는 함수입니다.
export async function delay(ms: number) {
  //몇초동안 딜레이를 걸지 ms 받아옴.
  return new Promise((resolve) => {
    //Promise 객체를 내보내면서 프로미스의 인수로 들어가는 executor 실행자 함수는 resolve 매개변수로 받아 이 함수 안에서 settimeout 함수 호출 후, 시간을 ms간 지연시켰다가 딜레이를 끝내도록한다.
    setTimeout(() => {
      resolve("");
    }, ms);
  });
}
/*
동작 방식:

delay(3000)과 같이 호출하면 지정된 시간(ms) 동안 대기하는 새로운 Promise를 반환합니다.

내부의 setTimeout이 실행되어 설정된 시간이 지나면 타이머가 만료되고, resolve("")가 호출됩니다.

await delay(3000) 형태로 사용하면 해당 시간 동안 코드의 실행 흐름을 멈추거나(비동기 대기), Next.js 등에서 로딩 상태(Suspense)를 테스트할 때 유용하게 쓰입니다.
 */

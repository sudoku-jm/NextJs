// import { useEffect } from "react";
import ClientComponent from "../../components/client-component";
import styles from "./page.module.css";
import ServerComponent from "../../components/server-compoent";

export default function Home() {
  // useEffect(() => {},[]) //서버 컴포넌트에서 쓸 수 없음. 에러남.
  return (
    <div className={styles.page}>
      인덱스 페이지
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
}

import Room from "@/app/(afterLogin)/messages/_component/Room";
import style from "./message.module.css";

//메세지, 쪽지 페이지
export default function Home() {
    return (
        <main className={style.main}>
            <div className={style.header}>
                <h3>쪽지</h3>
            </div>
            <Room />
            <Room />
            <Room />
        </main>
    );
}

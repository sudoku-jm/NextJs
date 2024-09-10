"use client";
import style from "../search.module.css";
export default function Tab() {
    return (
        <div className={style.homeFixed}>
            <div className={style.homeTab}>
                <div onClick={onClickHot}>
                    인기
                    <div
                        className={style.tabIndicator}
                        hidden={current === "new"}
                    ></div>
                </div>
                <div onClick={onClickNew}>
                    최신
                    <div
                        className={style.tabIndicator}
                        hidden={current === "hot"}
                    ></div>
                </div>
            </div>
        </div>
    );
}

import style from "./search.module.css";
import SearchForm from "@/app/(afterLogin)/_component/SearchForm";
import BackButton from "@/app/(afterLogin)/_component/BackButton";
import Tab from "@/app/(afterLogin)/search/_component/Tab";
import SearchResult from "@/app/(afterLogin)/search/_component/SearchResult";

type Props = {
    searchParams: { q: string; f?: string; pf?: string };
};
// 주소 파라미터 searchParams
export default function Search({ searchParams }: Props) {
    return (
        <main className={style.main}>
            <div className={style.searchTop}>
                <div className={style.searchZone}>
                    <div className={style.buttonZone}>
                        <BackButton />
                    </div>
                    <div className={style.formZone}>
                        <SearchForm q={searchParams.q} />
                    </div>
                </div>
                <Tab />
            </div>
            <div className={style.list}>
                {/* SearchResult : 검색 리스트 호출 컴포넌트*/}
                <SearchResult searchParams={searchParams} />
            </div>
        </main>
    );
}
